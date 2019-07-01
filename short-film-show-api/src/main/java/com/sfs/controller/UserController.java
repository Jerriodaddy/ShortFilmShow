package com.sfs.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sfs.pojo.Users;
import com.sfs.pojo.UsersReport;
import com.sfs.pojo.vo.PublisherVideo;
import com.sfs.pojo.vo.UsersVO;
import com.sfs.service.UserService;
import com.sfs.utils.JSONResult;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(value = "User workflow logic")
@RequestMapping("/user")
public class UserController extends BasicController {

	@Autowired
	private UserService userService;

	@ApiOperation(value = "User uploads face image")
	@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "query")
	@PostMapping("/uploadFace")
	public JSONResult uploadFace(String userId, @RequestParam("file") MultipartFile[] files) throws Exception {

		if (StringUtils.isBlank(userId)) {
			return JSONResult.errorMsg("User id can not be null.");
		}
		// 文件保存空间地址

		String fileSpace = FILE_SPACE;

		// 保存到数据库中的相对路径
		String uploadPathDB = "/" + userId + "/face";

		String fileName = files[0].getOriginalFilename();

		FileOutputStream fileOutputStream = null;
		InputStream inputStream = null;
		try {
			if (files != null && files.length > 0) {
				if (StringUtils.isNotBlank(fileName)) {
					// 文件上传的最终保存路径
					String finalFacePath = fileSpace + uploadPathDB + "/" + fileName;
					// 数据库保存的路径
					uploadPathDB += ("/" + fileName);

					File outFile = new File(finalFacePath);
					if (outFile.getParentFile() != null || !outFile.getParentFile().isDirectory()) {
						// Create the parent directory.
						outFile.getParentFile().mkdirs();
					}

					fileOutputStream = new FileOutputStream(outFile);
					inputStream = files[0].getInputStream();
					IOUtils.copy(inputStream, fileOutputStream);
				}
			} else {
				return JSONResult.errorMsg("Upload error.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return JSONResult.errorMsg("Upload error.");
		} finally {
			if (fileOutputStream != null) {
				fileOutputStream.flush();
				fileOutputStream.close();
			}
		}

		Users user = new Users();
		user.setId(userId);
		user.setFaceImage(uploadPathDB);
		userService.updateUserInfo(user);

		return JSONResult.ok(uploadPathDB); // 返回头像地址
	}

	@ApiOperation(value = "Query the user's info")
	@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "query")
	@PostMapping("/query")
	public JSONResult query(String userId) throws Exception {

		if (StringUtils.isBlank(userId)) {
			return JSONResult.errorMsg("User id can not be null.");
		}

		Users userInfo = userService.queryUserInfo(userId);
		UsersVO usersVO = new UsersVO();
		BeanUtils.copyProperties(userInfo, usersVO);

		return JSONResult.ok(usersVO);
	}
	
	@ApiOperation(value = "Query the publisher info", notes = "Query the relation between this user and the publisher.")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "loginUserId", required = false, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "videoId", required = false, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "publishUserId", required = true, dataType = "String", paramType = "form"),
	})
	@PostMapping("/queryPublisher")
	public JSONResult queryPublisher(String loginUserId, String videoId, String publishUserId) throws Exception {

		if (StringUtils.isBlank(publishUserId)) {
			return JSONResult.errorMsg("");
		}
		
//		System.out.println("loginUserId="+loginUserId+"\n"
//		+"videoId="+videoId+"\n"
//		+"publishUserId="+publishUserId);
		
		// 1. 查询发布者信息
		Users userInfo = userService.queryUserInfo(publishUserId);
		UsersVO publisher = new UsersVO();
		BeanUtils.copyProperties(userInfo, publisher);
		
		// 2. 查询当前登录者和视频间关系
		boolean userLikeVideo = userService.isUserLikeVideo(loginUserId, videoId);
		
		PublisherVideo bean = new PublisherVideo();
		bean.setPublisher(publisher);
		bean.setUserLikeVideo(userLikeVideo);
		
		return JSONResult.ok(bean);
	}
	
	@ApiOperation(value = "Be the fans")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "fanId", required = true, dataType = "String", paramType = "form"),
	})
	@PostMapping("/follow")
	public JSONResult follow(String userId, String fanId) throws Exception {

		if (StringUtils.isBlank(fanId) || StringUtils.isBlank(userId)) {
			return JSONResult.errorMsg("");
		}
		
		userService.saveUserFanRelation(userId, fanId);
		
		return JSONResult.ok("Follow success");
	}
	
	@ApiOperation(value = "Don't be the fans")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "fanId", required = true, dataType = "String", paramType = "form"),
	})
	@PostMapping("/dontFollow")
	public JSONResult dontFollow(String userId, String fanId) throws Exception {

		if (StringUtils.isBlank(fanId) || StringUtils.isBlank(userId)) {
			return JSONResult.errorMsg("");
		}
		
		userService.deleteUserFanRelation(userId, fanId);
		
		return JSONResult.ok("Cancle follow success");
	}
	
	@PostMapping("/reportUser")
	public JSONResult reportUser (@RequestBody UsersReport usersReport) throws Exception {
		
		userService.reportUser(usersReport);
		
		return JSONResult.ok("Cancle follow success");
	}
	
	
}
