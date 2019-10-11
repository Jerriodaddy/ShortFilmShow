package com.sfs.mapper;

import com.sfs.pojo.Users;
import com.sfs.utils.MyMapper;

public interface UsersMapper extends MyMapper<Users> {
	
	/**
	 * @Description: 增加粉丝数
	 */
	public void addFansCount(String userId);
	
	/**
	 * @Description: 增加粉丝数
	 */
	public void reduceFansCount(String userId);
	
	/**
	 * @Description: 增加关注数
	 */
	public void addFollowCount(String userId);
	
	/**
	 * @Description: 减少关注数
	 */
	public void reduceFollowCount(String userId);
}