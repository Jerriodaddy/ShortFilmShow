package com.sfs.service;

import java.util.Date;
import java.util.List;

import org.n3r.idworker.Sid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sfs.mapper.CommentsMapper;
import com.sfs.mapper.CommentsMapperCustom;
import com.sfs.mapper.SearchRecordsMapper;
import com.sfs.mapper.UsersLikeVideosMapper;
import com.sfs.mapper.UsersMapper;
import com.sfs.mapper.VideosMapper;
import com.sfs.mapper.VideosMapperCustom;
import com.sfs.pojo.Comments;
import com.sfs.pojo.SearchRecords;
import com.sfs.pojo.UsersLikeVideos;
import com.sfs.pojo.Videos;
import com.sfs.pojo.vo.CommentsVO;
import com.sfs.pojo.vo.VideosVO;
import com.sfs.utils.PagedResult;
import com.sfs.utils.TimeAgoUtils;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideosMapper videosMapper;

	@Autowired
	private VideosMapperCustom videosMapperCustom;

	@Autowired
	private SearchRecordsMapper searchRecordsMapper;

	@Autowired
	private UsersLikeVideosMapper usersLikeVideosMapper;

	@Autowired
	private CommentsMapper commentsMapper;

	@Autowired
	private CommentsMapperCustom commentsMapperCustom;

	@Autowired
	private Sid sid;

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public String saveVideo(Videos video) {
		String id = sid.nextShort();
		video.setId(id);
		videosMapper.insertSelective(video);
		return id;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void updateVideoCover(String videoId, String coverPath) {
		Videos video = new Videos();
		video.setId(videoId);
		video.setCoverPath(coverPath);
		videosMapper.updateByPrimaryKeySelective(video);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public PagedResult getAllVideos(Videos video, Integer isSaveRecord, Integer page, Integer pageSize) {

		// 保存搜索词
		String desc = video.getVideoDesc();
		if (isSaveRecord != null && isSaveRecord == 1) {
			SearchRecords record = new SearchRecords();
			String recordId = sid.nextShort();
			record.setId(recordId);
			record.setContent(desc);
			searchRecordsMapper.insert(record);
		}

		PageHelper.startPage(page, pageSize);
		List<VideosVO> list = videosMapperCustom.queryAllVideos(desc);

		PageInfo<VideosVO> pageList = new PageInfo<>(list);
		PagedResult pagedResult = new PagedResult();
		pagedResult.setPage(page);
		pagedResult.setTotal(pageList.getPages());
		pagedResult.setRows(list);
		pagedResult.setRecords(pageList.getTotal());

		return pagedResult;
	}

	@Override
	public PagedResult getAllVideosByCategory(Integer page, Integer pageSize, String Category) {

		return null;
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public List<String> getHotWords() {
		return searchRecordsMapper.getHotWords();
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void userLikeVideo(String userId, String videoId) {
		// 1. 保存 UserLikeVideos 关联关系表
		String likeId = sid.nextShort();
		UsersLikeVideos ulv = new UsersLikeVideos();
		ulv.setId(likeId);
		ulv.setUserId(userId);
		ulv.setVideoId(videoId);
		usersLikeVideosMapper.insert(ulv);

		// 2. 视频喜欢数量累加
		videosMapperCustom.addVideoLikeCount(videoId);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void userUnlikeVideo(String userId, String videoId) {
		// 1. 删除 UserLikeVideos 关联关系表
		Example example = new Example(UsersLikeVideos.class);
		Criteria criteria = example.createCriteria();
		criteria.andEqualTo("userId", userId);
		criteria.andEqualTo("videoId", videoId);

		usersLikeVideosMapper.deleteByExample(example);

		// 2. 视频喜欢数量累减
		videosMapperCustom.reduceVideoLikeCount(videoId);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void saveComment(Comments comment) {
		String id = sid.nextShort();
		comment.setId(id);
		comment.setCreateDate(new Date());
		commentsMapper.insertSelective(comment);
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public PagedResult getAllComments(String videoId, Integer page, Integer pageSize) {
		PageHelper.startPage(page, pageSize);

		List<CommentsVO> list = commentsMapperCustom.queryComments(videoId);
		for (CommentsVO c : list) {
			// add timeAgo
			String timeAgo = TimeAgoUtils.format(c.getCreateDate());
			c.setTimeAgoStr(timeAgo);
		}
		
		PageInfo<CommentsVO> pageList = new PageInfo<>(list);
		
		PagedResult pagedResult = new PagedResult();
		pagedResult.setPage(page);
		pagedResult.setTotal(pageList.getPages());
		pagedResult.setRows(list);
		pagedResult.setRecords(pageList.getTotal());

		return pagedResult;
	}

}
