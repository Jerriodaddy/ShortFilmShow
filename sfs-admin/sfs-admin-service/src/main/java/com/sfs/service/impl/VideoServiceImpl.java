package com.sfs.service.impl;

import java.util.Date;

import org.n3r.idworker.Sid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sfs.mapper.VideosMapper;
import com.sfs.pojo.Videos;
import com.sfs.service.VideoService;
import com.sfs.utils.PagedResult;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired 
	private VideosMapper videosmapper;
	
	@Autowired
	private Sid sid;
	
	@Override
	public void addVideo(Videos video) {
		String videoId = sid.nextShort();
		video.setId(videoId);
		video.setCreateDate(new Date());
		videosmapper.insertSelective(video);
	}
	
	@Override
	public PagedResult queryReportList(Integer page, Integer pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateVideoStatus(String videoId, Integer status) {
		// TODO Auto-generated method stub
		
	}


}
