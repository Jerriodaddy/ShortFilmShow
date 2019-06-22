package com.sfs.service;

import com.sfs.pojo.Videos;

public interface VideoService {
	
	public String saveVideo(Videos video);
	
	/**
	 * 
	 * @Description: Update the cover of video.
	 */
	public void updateVideoCover(String videoId, String coverPath);
	
}
