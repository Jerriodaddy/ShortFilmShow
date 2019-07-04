package com.sfs.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController // = @Controller + @ResponseBody
public class HelloController {
	
	@RequestMapping("/hello")
	public Object hello(){
		return "Hello Jumboxer~~";
	}

}
