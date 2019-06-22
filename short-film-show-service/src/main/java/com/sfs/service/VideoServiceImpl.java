package com.sfs.service;

import java.util.List;

import org.n3r.idworker.Sid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sfs.mapper.VideosMapper;
import com.sfs.mapper.VideosMapperCustom;
import com.sfs.pojo.Videos;
import com.sfs.pojo.vo.VideosVO;
import com.sfs.utils.PagedResult;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideosMapper videosMapper;
	
	@Autowired
	private VideosMapperCustom videoMapperCustom;
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

	@Override
	public PagedResult getAllVideosByCategory(Integer page, Integer pageSize, String Category) {

		
		return null;
	}

	@Override
	public PagedResult getAllVideos(Integer page, Integer pageSize) {
		PageHelper.startPage(page, pageSize);
		List<VideosVO> list = videoMapperCustom.queryAllVideos();
		
		PageInfo<VideosVO> pageList = new PageInfo<>(list);
		PagedResult pagedResult = new PagedResult();
		pagedResult.setPage(page);
		pagedResult.setTotal(pageList.getPages());
		pagedResult.setRows(list);
		pagedResult.setRecords(pageList.getTotal()); 
		
		return pagedResult;
	}
 
}
