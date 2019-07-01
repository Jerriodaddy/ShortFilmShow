package com.sfs.mapper;

import java.util.List;

import com.sfs.pojo.Comments;
import com.sfs.pojo.vo.CommentsVO;
import com.sfs.utils.MyMapper;

public interface CommentsMapperCustom extends MyMapper<Comments> {
	
	public List<CommentsVO> queryComments(String videoId);
}