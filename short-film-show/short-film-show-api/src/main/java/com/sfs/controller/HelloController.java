package com.sfs.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sfs.cofig.ResourceConfig;
import com.sfs.pojo.Users;
import com.sfs.pojo.UsersBehavior;
import com.sfs.pojo.Videos;
import com.sfs.pojo.easypoi.UserBehave;
import com.sfs.service.UserService;
import com.sfs.service.VideoService;
import com.sfs.utils.ExcelUtils;
import com.sfs.utils.JSONResult;

import io.swagger.annotations.ApiOperation;

@RestController // = @Controller + @ResponseBody
public class HelloController{
	@Autowired
	public ResourceConfig resourceConfig;
	
	@Autowired
	public UserService userService;
	
	@GetMapping("/hello")
	public Object hello(){
		return "Hello Jumboxer~~";
	}
	
	@GetMapping("/getResource")
	public JSONResult getResource() {

		System.out.println(resourceConfig.getFileSpace());
		return JSONResult.ok(resourceConfig);
	}
	
	@ApiOperation(value = "export Excle", notes = "export Excle")
	@GetMapping("/exportExcel")
	public void exportExcel(HttpServletResponse response) {
		System.out.println("导出 Excel");
		// 模拟从数据库获取需要导出的数据
		List<UsersBehavior> personList = userService.queryUserBehavior();
		// 导出操作
		ExcelUtils.exportExcel(personList, "User Behavior", "sheet1", UsersBehavior.class, "behaviorlog.xls", response);
		
	}

}
