package com.sfs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.scheduling.annotation.EnableAsync;
//import org.springframework.scheduling.annotation.EnableScheduling;

//import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
//扫描所有需要的包，包含一些自用工具类包所在路径
@ComponentScan(basePackages = {"com.sfs"})
//开启定时任务
//@EnableScheduling
//开启异步调用方法
//@EnableAsync
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}