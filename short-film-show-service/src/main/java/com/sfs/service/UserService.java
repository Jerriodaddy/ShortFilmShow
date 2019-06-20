package com.sfs.service;

import com.sfs.pojo.Users;

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
}
