package com.sfs.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Date;

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

import com.sfs.enums.VideoStatusEnum;
import com.sfs.pojo.Comments;
import com.sfs.pojo.Users;
import com.sfs.pojo.Videos;
import com.sfs.pojo.vo.UsersVO;
import com.sfs.service.UserService;
import com.sfs.service.VideoService;
import com.sfs.utils.JSONResult;
import com.sfs.utils.PagedResult;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api(value = "User workflow logic")
@RequestMapping("/video")
public class VideoController extends BasicController {

	@Autowired
	private VideoService videoService;

	@ApiOperation(value = "User uploads vedio")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "videoSeconds", required = true, dataType = "int", paramType = "form"),
		@ApiImplicitParam(name = "videoWidth", required = true, dataType = "int", paramType = "form"),
		@ApiImplicitParam(name = "videoHeight", required = true, dataType = "int", paramType = "form"),
		@ApiImplicitParam(name = "desc", required = false, dataType = "String", paramType = "form")
	})
	
	@PostMapping(value="/uploadVideo", headers="content-type=multipart/form-data")
	public JSONResult uploadVideo(String userId, 
			double videoSeconds, int videoWidth, int videoHeight,
			String desc,
			@ApiParam(value = "Short video", required = true)
			MultipartFile file) throws Exception {
		if (StringUtils.isBlank(userId)) {
			return JSONResult.errorMsg("User id can not be null.");
		}
		// 文件保存空间地址
		String fileSpace = FILE_SPACE;
		// 保存到数据库中的相对路径
		String uploadPathDB = "/" + userId + "/video";

		String fileName = file.getOriginalFilename();

		FileOutputStream fileOutputStream = null;
		InputStream inputStream = null;
		// 文件上传的最终保存路径
		String finalVideoPath = "";
		try {
			if (file != null) {
				if (StringUtils.isNotBlank(fileName)) {
					finalVideoPath = fileSpace + uploadPathDB + "/" + fileName;
					// 数据库保存的路径
					uploadPathDB += ("/" + fileName);

					File outFile = new File(finalVideoPath);
					if (outFile.getParentFile() != null || !outFile.getParentFile().isDirectory()) {
						// Create the parent directory.
						outFile.getParentFile().mkdirs();
					}

					fileOutputStream = new FileOutputStream(outFile);
					inputStream = file.getInputStream();
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
		
		// 保存视频信息到数据库
		Videos video = new Videos();
		video.setUserId(userId); 
		video.setVideoSeconds((float)videoSeconds);
		video.setVideoHeight(videoHeight);
		video.setVideoWidth(videoWidth);
		video.setVideoDesc(desc);
		video.setVideoPath(uploadPathDB);
		video.setStatus(VideoStatusEnum.SUCCESS.value);
		video.setCreateDate(new Date());
		video.setCategory("Default");

		String videoId = videoService.saveVideo(video);
		
		return JSONResult.ok(videoId); // 返回头像地址
	}
	
	@ApiOperation(value = "Uploads video cover")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "videoId", required = true, dataType = "String", paramType = "form"),
	})
	@PostMapping(value="/uploadCover", headers="content-type=multipart/form-data")
	public JSONResult uploadCover(String userId,
			String videoId, 
			@ApiParam(value = "Video Cover", required = true)
			MultipartFile file) throws Exception {
		if (StringUtils.isBlank(videoId) || StringUtils.isBlank(userId)) {
			return JSONResult.errorMsg("Video id & user id can not be null.");
		}
		// 文件保存空间地址
		String fileSpace = FILE_SPACE;
		// 保存到数据库中的相对路径
		String uploadPathDB = "/" + userId + "/video";

		String fileName = file.getOriginalFilename();

		FileOutputStream fileOutputStream = null;
		InputStream inputStream = null;
		// 文件上传的最终保存路径
		String finalCoverPath = "";
		try {
			if (file != null) {
				if (StringUtils.isNotBlank(fileName)) {
					finalCoverPath = fileSpace + uploadPathDB + "/" + fileName;
					// 数据库保存的路径
					uploadPathDB += ("/" + fileName);

					File outFile = new File(finalCoverPath);
					if (outFile.getParentFile() != null || !outFile.getParentFile().isDirectory()) {
						// Create the parent directory.
						outFile.getParentFile().mkdirs();
					}

					fileOutputStream = new FileOutputStream(outFile);
					inputStream = file.getInputStream();
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
		
		videoService.updateVideoCover(videoId, uploadPathDB);
		
		return JSONResult.ok(); // 返回头像地址
	}
	
	/**
	 * 
	 * @param video
	 * @param isSaveRecord 1 - 需要保持
	 * 			   0 or null - 不需要保存
	 * @param page
	 * @return
	 * @throws Exception
	 */
	@ApiOperation(value = "Query all video by paging", notes = "default size is 5.")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "isSaveRecord", required = false, dataType = "Integer", paramType = "form"),
		@ApiImplicitParam(name = "page", required = false, dataType = "Integer", paramType = "form"),
	})
	@PostMapping(value="/showAll")
	public JSONResult showAll(@RequestBody Videos video, Integer isSaveRecord,
			Integer page, Integer pageSize) throws Exception{
		
		if (page == null) {
			page = 1;
		}
		
		if (pageSize == null) {
			pageSize = PAGE_SIZE;
		}
		
		PagedResult result = videoService.getAllVideos(video, isSaveRecord, page, pageSize);
		return JSONResult.ok(result);
	}
	
	@ApiOperation(value = "Get hot words")
	@PostMapping(value="/hot")
	public JSONResult showAll() throws Exception{
		return JSONResult.ok(videoService.getHotWords());
	}
	
	@ApiOperation(value = "User like the video")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "videoId", required = true, dataType = "String", paramType = "form"),
	})
	@PostMapping(value="/userLike")
	public JSONResult userLike(String userId, String videoId) throws Exception{
		//TODO userId 和 video Id 需有记录
		
		videoService.userLikeVideo(userId, videoId);
		return JSONResult.ok();
	}
	
	@ApiOperation(value = "User unlike the video")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "userId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "videoId", required = true, dataType = "String", paramType = "form"),
	})
	@PostMapping(value="/userUnLike")
	public JSONResult userUnLike(String userId, String videoId) throws Exception{
		//TODO userId 和 video Id 需有记录
		
		videoService.userUnlikeVideo(userId, videoId);
		return JSONResult.ok();
	}
	
	@ApiOperation(value = "User unlike the video")
	@PostMapping(value="/saveComment")
	public JSONResult saveComment(@RequestBody Comments comment,
			String fatherCommentId, String toUserId) throws Exception{
		
		if (fatherCommentId != null && toUserId != null) {
			comment.setFatherCommentId(fatherCommentId);
			comment.setToUserId(toUserId);
		}
		
		videoService.saveComment(comment);
		return JSONResult.ok();
	}
	
	@ApiOperation(value = "Query all video by paging", notes = "default size is 10.")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "videoId", required = true, dataType = "String", paramType = "form"),
		@ApiImplicitParam(name = "page", required = false, dataType = "Integer", paramType = "form"),
		@ApiImplicitParam(name = "pageSize", required = false, dataType = "Integer", paramType = "form"),
	})
	@PostMapping(value="/getAllComments")
	public JSONResult getAllComments(String videoId, Integer page, Integer pageSize) throws Exception{
		
		if (page == null) {
			page = 1;
		}
 
		if (pageSize == null) {
			pageSize = 10;
		}
		
		PagedResult list = videoService.getAllComments(videoId, page, pageSize);
		
		return JSONResult.ok(list);
	}
}
