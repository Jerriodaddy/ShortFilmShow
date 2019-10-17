package com.sfs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MultipartException;

import com.sfs.config.ResourceConfig;
import com.sfs.utils.JSONResult;

import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan(basePackages="com.sfs.mapper")
//扫描所有需要的包，包含一些自用工具类包所在路径
@ComponentScan(basePackages = {"com.sfs", "org.n3r.idworker"})
//开启定时任务
//@EnableScheduling
//开启异步调用方法
//@EnableAsync
public class Application {
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
//	@ControllerAdvice
//	public class ExceptionProcess {
//	    // 对这个异常的统一处理，返回值 和Controller的返回规则一样
//	    @ExceptionHandler(MultipartException.class)
//	    public JSONResult handleAll(Throwable t){
//	        // 此方法无法正确向客户端返回消息
//	    	System.out.println("Uploaded file size exceed server's limit");
//	    	return JSONResult.errorException("Uploaded file size exceed server's limit");
//	    }
//	}
}