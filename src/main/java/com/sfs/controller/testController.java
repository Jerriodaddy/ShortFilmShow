package com.sfs.controller;

import java.util.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.sfs.pojo.JSONResult;
//import com.sfs.pojo.SysUser;
//import com.sfs.service.UserService;

@RestController // = @Controller + @ResponseBody
public class testController {
	
//	@Autowired
//	private Sid sid;
	
//	private PropertiesConfig propertiesConfig;
	
	
	@RequestMapping("/test")
	public Object test(){
		return "Hello Jumboxer~~";
	}
}
