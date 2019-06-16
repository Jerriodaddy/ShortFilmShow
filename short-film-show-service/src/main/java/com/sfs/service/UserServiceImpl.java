package com.sfs.service;

import org.apache.catalina.User;
import org.n3r.idworker.Sid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.sfs.mapper.UsersMapper;
import com.sfs.pojo.Users;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UsersMapper usermapper;
	
	@Autowired
	private Sid sid;
	
	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public boolean queryUsernameExist(String username) {
		
		Users user = new Users();
		user.setUsername(username);
		
		Users result = usermapper.selectOne(user);
		
		return result == null ? false : true;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void saveUser(Users user) {
		
		String userId = sid.nextShort();
		user.setId(userId);
		usermapper.insert(user);
	}
	
	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public Users queryUserForLogin(String username, String password) {
		Example userExample = new Example(Users.class);
		Criteria criteria = userExample.createCriteria();
		criteria.andEqualTo("username", username);
		criteria.andEqualTo("password", password);
		
		Users result = usermapper.selectOneByExample(userExample);
		
		return result;
	}

}
