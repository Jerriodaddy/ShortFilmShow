package com.sfs.service;

import com.sfs.pojo.Users;
import com.sfs.pojo.UsersReport;

public interface UserService {
	/**
	 * @param username
	 * @return Whether the username exist.
	 */
	public boolean queryUsernameExist(String username);
	
	/**
	 * Save the user's information.
	 * @param user
	 */
	public void saveUser(Users user);
	
	/**
	 * @param username
	 * @param password
	 * @return Whether this username & password exist.
	 */
	public Users queryUserForLogin(String username, String password);
	
	public void updateUserInfo(Users user);
	
	public Users queryUserInfo(String userId);
	
	public boolean isUserLikeVideo(String userId, String videoId);
	
	/**
	 * @Description 增加用户粉丝关系
	 * @param userId
	 * @param fanId
	 */
	public void saveUserFanRelation(String userId, String fanId);
	
	/**
	 * @Description 删除用户粉丝关系
	 * @param userId
	 * @param fanId
	 */
	public void deleteUserFanRelation(String userId, String fanId);

	public void reportUser(UsersReport usersReport);
}
