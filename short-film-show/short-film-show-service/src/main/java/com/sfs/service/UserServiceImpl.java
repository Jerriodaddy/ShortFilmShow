package com.sfs.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.catalina.User;
import org.apache.commons.lang3.StringUtils;
import org.n3r.idworker.Sid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.sfs.mapper.UsersBehaviorMapper;
import com.sfs.mapper.UsersFansMapper;
import com.sfs.mapper.UsersLikeVideosMapper;
import com.sfs.mapper.UsersMapper;
import com.sfs.mapper.UsersReportMapper;
import com.sfs.pojo.Users;
import com.sfs.pojo.UsersBehavior;
import com.sfs.pojo.UsersFans;
import com.sfs.pojo.UsersLikeVideos;
import com.sfs.pojo.UsersReport;
import com.sfs.pojo.easypoi.UserBehave;
import com.sfs.utils.JSONResult;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.entity.Example.Criteria;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UsersMapper userMapper;
	
	@Autowired
	private UsersFansMapper usersFansMapper;
	
	@Autowired
	private UsersLikeVideosMapper usersLikeVideosMapper;
	
	@Autowired
	private UsersReportMapper usersReportMapper;
	
	@Autowired
	private UsersBehaviorMapper usersBehaviorMapper;
	
	@Autowired
	private Sid sid;
	
	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public boolean queryUsernameExist(String username) {
		
		Users user = new Users();
		user.setUsername(username);
		
		Users result = userMapper.selectOne(user);
		
		return result == null ? false : true;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void saveUser(Users user) {
		
		String userId = sid.nextShort();
		user.setId(userId);
		userMapper.insertSelective(user);
	}
	
	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public Users queryUserForLogin(String username, String password) {
		Example userExample = new Example(Users.class);
		Criteria criteria = userExample.createCriteria();
		criteria.andEqualTo("username", username);
		criteria.andEqualTo("password", password);
		
		Users result = userMapper.selectOneByExample(userExample);
		
		return result;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void updateUserInfo(Users user) {
		Example userExample = new Example(Users.class);
		Criteria criteria = userExample.createCriteria();
		criteria.andEqualTo("id", user.getId());
		userMapper.updateByExampleSelective(user, userExample);
		
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public Users queryUserInfo(String userId) {
		Example userExample = new Example(Users.class);
		Criteria criteria = userExample.createCriteria();
		criteria.andEqualTo("id", userId);
		Users user = userMapper.selectOneByExample(userExample);
		return user;
	}
	
	@Transactional(propagation = Propagation.SUPPORTS) 
	@Override
	public boolean isUserLikeVideo(String userId, String videoId) {
		if (StringUtils.isBlank(userId) || StringUtils.isBlank(videoId)) {
			return false;
		}
		
		Example example = new Example(UsersLikeVideos.class);
		Criteria criteria = example.createCriteria();
		criteria.andEqualTo("userId", userId);
		criteria.andEqualTo("videoId", videoId);
		
		List<UsersLikeVideos> list = usersLikeVideosMapper.selectByExample(example);
		if (list != null && list.size()>0) {
			return true;
		} 
		return false;
	}
	
	@Transactional(propagation = Propagation.REQUIRED) 
	@Override
	public void saveUserFanRelation(String userId, String fanId) {
		
		// 保存到 users_fans关系表
		String relId = sid.nextShort();
		
		UsersFans userFan = new UsersFans();
		userFan.setId(relId);
		userFan.setUserId(fanId);
		userFan.setFanId(fanId);
		
		usersFansMapper.insert(userFan);
		// 更新用户信息
		userMapper.addFansCount(userId);
		userMapper.addFollowCount(fanId);
	}

	@Transactional(propagation = Propagation.REQUIRED) 
	@Override
	public void deleteUserFanRelation(String userId, String fanId) {
		Example example = new Example(UsersFans.class);
		Criteria criteria = example.createCriteria();
		criteria.andEqualTo("userId", userId);
		criteria.andEqualTo("fanId", fanId);
		
		usersFansMapper.deleteByExample(example);
		
		userMapper.reduceFansCount(userId);
		userMapper.reduceFollowCount(fanId);
		
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void reportUser(UsersReport userReport) {
		String userId = sid.nextShort();
		userReport.setId(userId);
		userReport.setCreateDate(new Date());
		
		usersReportMapper.insert(userReport);
		
	}
	
	@Transactional(propagation = Propagation.SUPPORTS)
	@Override
	public List<UsersBehavior> queryUserBehavior() {
		return usersBehaviorMapper.selectAll();
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public void saveUserBehavior(String userId, String behavior, String target, String videoId, String commentId) {
		String id = sid.nextShort();
		
		UsersBehavior usersBehavior = new UsersBehavior();
		usersBehavior.setId(id);
		usersBehavior.setUserId(userId);
		usersBehavior.setBehavior(behavior);
		usersBehavior.setTarget(target);
		usersBehavior.setVideoId(videoId);
		usersBehavior.setCommentId(commentId);
		usersBehavior.setCreateDate(new Date());
		
		usersBehaviorMapper.insertSelective(usersBehavior);
		
	}
}
