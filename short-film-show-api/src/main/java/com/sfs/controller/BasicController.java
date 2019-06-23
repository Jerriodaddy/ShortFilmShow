package com.sfs.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.sfs.utils.RedisOperator;


@RestController // = @Controller + @ResponseBody
public class BasicController {
	
	@Autowired
	public RedisOperator redis;
	
	public static final String USER_REDIS_SESSION = "user-redis-session"; //Final 均大写

	//文件保存空间地址
	public static final String FILE_SPACE = "/Users/jerrio/Desktop/JumboX/TheShortFilmShow/short-film-show/tmp";
	
//	public static final String FFMPEG_EXE = "";
	
	// 每页分页的记录数
	public static final Integer PAGE_SIZE = 5;

}
