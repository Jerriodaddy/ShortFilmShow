package com.sfs.controller;
 
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sfs.utils.RedisOperator;


@RestController // = @Controller + @ResponseBody
public class BasicController {
	
	@Autowired
	public RedisOperator redis;
	
	public static final String DEFAULT_USER_ID = "Unknow";
	
	public static final String USER_REDIS_SESSION = "user-redis-session"; //Final 均大写

	//文件保存空间地址
	public static final String FILE_SPACE = "/Users/jerrio/Desktop/JumboX/TheShortFilmShow/short-film-show/tmp";
	
//	public static final String FFMPEG_EXE = "";
	
	// 每页分页的记录数
	public static final Integer PAGE_SIZE = 5;
	
	public void uploadFile(MultipartFile file, String path) throws Exception {

		FileOutputStream fileOutputStream = null;
		InputStream inputStream = null;
		try {
			if (file != null) {

				File outFile = new File(path);
				if (outFile.getParentFile() != null || !outFile.getParentFile().isDirectory()) {
					// Create the parent directory.
					outFile.getParentFile().mkdirs();
				}

				fileOutputStream = new FileOutputStream(outFile);
				inputStream = file.getInputStream();
				IOUtils.copy(inputStream, fileOutputStream);
			} else {
				System.out.println("The file is null");
				return;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (fileOutputStream != null) {
				fileOutputStream.flush();
				fileOutputStream.close();
			}
		}
	}
	
}
