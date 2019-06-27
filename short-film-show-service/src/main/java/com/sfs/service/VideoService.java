package com.sfs.service;

import java.util.List;

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
	public PagedResult getAllVideos(Videos video, Integer isSaveRecord, Integer page, Integer pageSize);
	
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
}
