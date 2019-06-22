package com.sfs.service;

import com.sfs.pojo.Videos;
import com.sfs.utils.PagedResult;

public interface VideoService {
	
	public String saveVideo(Videos video);
	
	/**
	 * 
	 * @Description: Update the cover of video.
	 */
	public void updateVideoCover(String videoId, String coverPath);
	
	public PagedResult getAllVideos(Integer page, Integer pageSize);
	
	public PagedResult getAllVideosByCategory(Integer page, Integer pageSize, String Category);

}
