package com.sfs.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.sfs.enums.VideoStatusEnum;
import com.sfs.pojo.Videos;
import com.sfs.service.UsersService;
import com.sfs.service.VideoService;
import com.sfs.utils.JSONResult;

@Controller
@RequestMapping("video")
public class VideoController extends BasicController {

	@Autowired
	private VideoService videoService;

	@Value("${FILE_SPACE}")
	private String FILE_SPACE;
	
	@GetMapping("/showAddVideo")
	public String showVideos() {
		return "video/addVideo";
	}

	@PostMapping("/addVideo")
	@ResponseBody
	public JSONResult addVideo(Videos video, MultipartFile videoFile, MultipartFile coverFile) throws Exception {
		String videoPathDB = uploadVideo(video, videoFile); // 返回数据库保存视频的路径
		String coverPathDB = uploadCover(video, coverFile); // 返回数据库保存视频的路径
		video.setVideoPath(videoPathDB);
		video.setCoverPath(coverPathDB);
		videoService.addVideo(video);
		return JSONResult.ok();
	}
	
	/**
	 * @Describtion 上传视频到指定文件夹
	 */
	public String uploadVideo(Videos video, MultipartFile file) throws Exception {
		String userId = video.getUserId();
		if (StringUtils.isBlank(userId) || StringUtils.isEmpty(userId)) {
			userId = DEFAULT_USER_ID;
		}
		// 文件保存空间地址
		String fileSpace = FILE_SPACE;
		String fileName = file.getOriginalFilename();
		// 保存到数据库中的相对路径
		String uploadPathDB = "";
		// 文件上传的最终保存路径
		String finalVideoPath = "";

		if (file != null) {
			if (StringUtils.isNotBlank(fileName)) {
				// 数据库保存的路径
				uploadPathDB += ("/" + userId + "/video" + "/" + fileName);

				finalVideoPath = fileSpace + uploadPathDB;

				uploadFile(file, finalVideoPath);
			}
		}

		return uploadPathDB;
	}
	
	public String uploadCover(Videos video, MultipartFile file) throws Exception {
		String userId = video.getUserId();
		if (StringUtils.isBlank(userId) || StringUtils.isEmpty(userId)) {
			userId = DEFAULT_USER_ID;
		}
		// 文件保存空间地址
		String fileSpace = FILE_SPACE;
		String fileName = file.getOriginalFilename();
		// 保存到数据库中的相对路径
		String uploadPathDB = "";
		// 文件上传的最终保存路径
		String finalVideoPath = "";

		if (file != null) {
			if (StringUtils.isNotBlank(fileName)) {
				// 数据库保存的路径
				uploadPathDB += ("/" + userId + "/video" + "/" + fileName);

				finalVideoPath = fileSpace + uploadPathDB;

				uploadFile(file, finalVideoPath);
			}
		}

		return uploadPathDB;
	}


//	@PostMapping(value="/uploadVideo", headers="content-type=multipart/form-data")
//	@ResponseBody
//	public JSONResult uploadVideo(Videos video, MultipartFile file) throws Exception {
//		String userId = video.getUserId();
//		if (StringUtils.isBlank(userId) || StringUtils.isEmpty(userId)) {
//			userId = DEFAULT_USER_ID;
//		}
//		// 文件保存空间地址
//		String fileSpace = FILE_SPACE;
//		// 保存到数据库中的相对路径
//		String uploadPathDB = "/" + userId + "/video";
//
//		String fileName = file.getOriginalFilename();
//
//		FileOutputStream fileOutputStream = null;
//		InputStream inputStream = null;
//		// 文件上传的最终保存路径
//		String finalVideoPath = "";
//		try {
//			if (file != null) {
//				if (StringUtils.isNotBlank(fileName)) {
//					finalVideoPath = fileSpace + uploadPathDB + "/" + fileName;
//					// 数据库保存的路径
//					uploadPathDB += ("/" + fileName);
//
//					File outFile = new File(finalVideoPath);
//					if (outFile.getParentFile() != null || !outFile.getParentFile().isDirectory()) {
//						// Create the parent directory.
//						outFile.getParentFile().mkdirs();
//					}
//
//					fileOutputStream = new FileOutputStream(outFile);
//					inputStream = file.getInputStream();
//					IOUtils.copy(inputStream, fileOutputStream);
//				}
//			} else {
//				return JSONResult.errorMsg("Upload error.");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//			return JSONResult.errorMsg("Upload error.");
//		} finally {
//			if (fileOutputStream != null) {
//				fileOutputStream.flush();
//				fileOutputStream.close();
//			}
//		}
//		
//		// 保存视频信息到数据库
////		Videos video = new Videos();
////		video.setUserId(userId); 
////		video.setVideoSeconds((float)videoSeconds);
////		video.setVideoHeight(videoHeight);
////		video.setVideoWidth(videoWidth);
////		video.setVideoDesc(desc);
////		video.setVideoPath(uploadPathDB);
////		video.setStatus(VideoStatusEnum.SUCCESS.value);
////		video.setCreateDate(new Date());
////		video.setCategory("Default");
////
////		String videoId = videoService.saveVideo(video);
//		
//		return JSONResult.ok(uploadPathDB); // 
//	}

}
