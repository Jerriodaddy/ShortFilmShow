package com.sfs.service;

import java.util.List;

import javax.xml.stream.events.Comment;

import com.sfs.pojo.Comments;
import com.sfs.pojo.Videos;
import com.sfs.utils.PagedResult;

public interface VideoService {
	
	public String saveVideo(Videos video);
	
	/**
	 * @Description: Update the cover of video.
	 */
	public void updateVideoCover(String videoId, String coverPath);

	/**
	 * @Description: 分页查询视频列表
	 */
	public PagedResult getAllVideos(String desc, Integer isSaveRecord, Integer page, Integer pageSize);
	
	public PagedResult getAllVideosByCategory(Integer page, Integer pageSize, String Category);
	
	/**
	 * @Description: 获取热搜词
	 */
	public List<String> getHotWords();
	
	/**
	 *  @Description: 用户点赞/喜欢视频
	 */
	public void userLikeVideo(String userId, String videoId);
	
	/**
	 *  @Description: 用户取消点赞/不喜欢视频
	 */
	public void userUnlikeVideo(String userId, String videoId);
	
	/**
	 *  @Description: 保存视频评论
	 */
	public void saveComment(Comments comment);
	
	/**
	 *  @Description: 获取视频评论
	 */
	public PagedResult getAllComments(String videoId, Integer page, Integer pageSize);
	
}
