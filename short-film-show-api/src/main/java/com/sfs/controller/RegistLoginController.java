package com.sfs.controller;

import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sfs.pojo.Users;
import com.sfs.pojo.vo.UsersVO;
import com.sfs.service.UserService;
import com.sfs.utils.JSONResult;
import com.sfs.utils.MD5Utils;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;

@RestController // = @Controller + @ResponseBody
@Api(value = "API of user login & register", tags = {"Login & Register Controller"})
public class RegistLoginController extends BasicController {
	
	@Autowired 
	private UserService userService;
	
	@ApiOperation(value = "Register", notes = "API of user register")
	@PostMapping("/register")
	public JSONResult regist(@RequestBody Users user) throws Exception{
		
		// 1.Username or password can not be null.
		if (StringUtils.isBlank(user.getUsername()) || StringUtils.isBlank(user.getPassword())){
			return JSONResult.errorMsg("Username or password can not be null.");
		}
		
		// 2.Does this user exist?
		boolean usernameExist = userService.queryUsernameExist(user.getUsername());
		
		// 3.Store this user's register information.
		if (!usernameExist) {
			user.setNickname(user.getUsername());
			user.setPassword(MD5Utils.getMD5Str(user.getPassword()));
			userService.saveUser(user); 
		} else {
			return JSONResult.errorMsg("This username already exist, please try another one.");
		}
		
		user.setPassword("");// Security concern
		
		UsersVO userVO = setUserRedisSessionToken(user);
		
		return JSONResult.ok(userVO);
	}
	
	public UsersVO setUserRedisSessionToken(Users userModel) {
		String uniqueToken = UUID.randomUUID().toString();
		redis.set(USER_REDIS_SESSION + ":" + userModel.getId(), uniqueToken, 1000 * 60 * 30); // 过期时间单位为毫秒
		
		UsersVO userVO = new UsersVO();
		BeanUtils.copyProperties(userModel, userVO);
		userVO.setUserToken(uniqueToken); 
		return userVO;
	}
	
	@ApiOperation(value = "Login", notes = "API of user login")
	@PostMapping("/login")
	public JSONResult login(@RequestBody Users user) throws Exception{
		String username = user.getUsername();
		String password = user.getPassword();
		
		// 1.Username or password can not be null.
		if (StringUtils.isBlank(username) || StringUtils.isBlank(password)){
			return JSONResult.errorMsg("Username or password can not be null.");
		}
		
		// 2.Does this user exist?
		Users userResult = userService.queryUserForLogin(username, MD5Utils.getMD5Str(password));
		
		// 3.return 
		if (userResult != null) {
			userResult.setPassword("");// Security concern
			UsersVO userVO = setUserRedisSessionToken(userResult);
			return JSONResult.ok(userVO);
		} else { 
			return JSONResult.errorMsg("Username or password is wrong, please try again.");
		}
	}
	
	@ApiOperation(value = "Logout", notes = "API of user logout")
	@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "query")
	@PostMapping("/logout")
	public JSONResult logout(String userId) throws Exception{ 
		//维护用户关系是通过 redis session，删除即可
		redis.del(USER_REDIS_SESSION + ":" + userId);
		return JSONResult.ok();
	}
}
