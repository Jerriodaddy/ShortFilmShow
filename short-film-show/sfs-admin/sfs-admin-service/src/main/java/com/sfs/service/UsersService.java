package com.sfs.service;

import com.sfs.pojo.Users;
import com.sfs.utils.PagedResult;

public interface UsersService {

	public PagedResult queryUsers(Users user, Integer page, Integer pageSize);
	
}
