package com.sfs.mapper;

import java.util.List;

import com.sfs.pojo.SearchRecords;
import com.sfs.utils.MyMapper;

public interface SearchRecordsMapper extends MyMapper<SearchRecords> {
	
	public List<String> getHotWords();
}