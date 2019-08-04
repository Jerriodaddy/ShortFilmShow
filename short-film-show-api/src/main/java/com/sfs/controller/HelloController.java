package com.sfs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sfs.cofig.ResourceConfig;
import com.sfs.utils.JSONResult;


@RestController // = @Controller + @ResponseBody
public class HelloController{
	@Autowired
	public ResourceConfig resourceConfig;
	
	@RequestMapping("/hello")
	public Object hello(){
		return "Hello Jumboxer~~";
	}
	
	@RequestMapping("/getResource")
	public JSONResult getResource() {

		System.out.println(resourceConfig.getFileSpace());
		return JSONResult.ok(resourceConfig);
	}

}
