package com.sfs.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

import com.sfs.pojo.Users;
import com.sfs.utils.JSONResult;

@RestController // = @Controller + @ResponseBody
public class RegistLoginController {
	@PostMapping("/regist")
	public JSONResult regist(@RequestBody Users user){
		
		// 1.Username or password can not be null.
		if (StringUtils.isBlank(user.getUsername()) || StringUtils.isBlank(user.getPassword())){
			return JSONResult.errorMsg("Username or password can not be null.");
		}
		
		// 2.Does this user exist?
		
		// 3.Store this user's information.
		
		return JSONResult.ok();
	}
}
