package com.sfs.service;

import com.sfs.pojo.Videos;
import com.sfs.utils.PagedResult;

public interface VideoService {
	
	public void addVideo(Videos video);
	
	public PagedResult queryReportList(Integer page, Integer pageSize);
	
	public void updateVideoStatus(String videoId, Integer status);
}
