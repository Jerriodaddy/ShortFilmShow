package com.sfs.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.UUID;

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
import com.sfs.pojo.vo.UsersVO;
import com.sfs.service.UserService;
import com.sfs.utils.JSONResult;
import com.sfs.utils.MD5Utils;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;

@RestController // = @Controller + @ResponseBody
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
		String fileSpace = "/Users/jerrio/Desktop/JumboX/TheShortFilmShow/short-film-show/tmp";
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
}
