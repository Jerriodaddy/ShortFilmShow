package com.sfs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.sfs.pojo.Videos;
import com.sfs.pojo.vo.VideosVO;
import com.sfs.utils.MyMapper;

public interface VideosMapperCustom extends MyMapper<Videos> {
	 
	public List<VideosVO> queryAllVideos(@Param("videoDesc") String videoDesc);
	
	public void addVideoLikeCount(String videoId);
	
	public void reduceVideoLikeCount(String videoId);
	
}