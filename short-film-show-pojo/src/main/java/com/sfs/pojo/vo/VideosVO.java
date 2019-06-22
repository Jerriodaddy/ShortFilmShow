package com.sfs.pojo.vo;

import java.util.Date;
import javax.persistence.*;

public class VideosVO {
 
    private String id;
    private String userId;
    private String category;
    private String coverPath;
    private String videoPath;
    private Float videoSeconds;
    private Integer videoHeight;
    private Integer videoWidth;
    private String videoDesc; 
    private Long likeNum;
    private Long commentNum;
    private Long popularity;
    private Integer status;
    private Date createTime;

    private String faceImage;
    private String nickname;
    
    public String getFaceImage() {
		return faceImage;
	}

	public void setFaceImage(String faceImage) {
		this.faceImage = faceImage;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

    /**
     * @return id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * 获取作者id
     *
     * @return user_id - 作者id
     */
    public String getUserId() {
        return userId;
    }

    /**
     * 设置作者id
     *
     * @param userId 作者id
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * 获取栏目
     *
     * @return category - 栏目
     */
    public String getCategory() {
        return category;
    }

    /**
     * 设置栏目
     *
     * @param category 栏目
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * 获取封面路径
     *
     * @return cover_path - 封面路径
     */
    public String getCoverPath() {
        return coverPath;
    }

    /**
     * 设置封面路径
     *
     * @param coverPath 封面路径
     */
    public void setCoverPath(String coverPath) {
        this.coverPath = coverPath;
    }

    /**
     * 获取视频路径
     *
     * @return video_path - 视频路径
     */
    public String getVideoPath() {
        return videoPath;
    }

    /**
     * 设置视频路径
     *
     * @param videoPath 视频路径
     */
    public void setVideoPath(String videoPath) {
        this.videoPath = videoPath;
    }

    /**
     * 获取视频时长
     *
     * @return video_seconds - 视频时长
     */
    public Float getVideoSeconds() {
        return videoSeconds;
    }

    /**
     * 设置视频时长
     *
     * @param videoSeconds 视频时长
     */
    public void setVideoSeconds(Float videoSeconds) {
        this.videoSeconds = videoSeconds;
    }

    /**
     * @return video_height
     */
    public Integer getVideoHeight() {
        return videoHeight;
    }

    /**
     * @param videoHeight
     */
    public void setVideoHeight(Integer videoHeight) {
        this.videoHeight = videoHeight;
    }

    /**
     * @return video_width
     */
    public Integer getVideoWidth() {
        return videoWidth;
    }

    /**
     * @param videoWidth
     */
    public void setVideoWidth(Integer videoWidth) {
        this.videoWidth = videoWidth;
    }

    /**
     * 获取视频描述
     *
     * @return video_desc - 视频描述
     */
    public String getVideoDesc() {
        return videoDesc;
    }

    /**
     * 设置视频描述
     *
     * @param videoDesc 视频描述
     */
    public void setVideoDesc(String videoDesc) {
        this.videoDesc = videoDesc;
    }

    /**
     * 获取赞数
     *
     * @return like_num - 赞数
     */
    public Long getLikeNum() {
        return likeNum;
    }

    /**
     * 设置赞数
     *
     * @param likeNum 赞数
     */
    public void setLikeNum(Long likeNum) {
        this.likeNum = likeNum;
    }

    /**
     * 获取评论数
     *
     * @return comment_num - 评论数
     */
    public Long getCommentNum() {
        return commentNum;
    }

    /**
     * 设置评论数
     *
     * @param commentNum 评论数
     */
    public void setCommentNum(Long commentNum) {
        this.commentNum = commentNum;
    }

    /**
     * 获取人气
     *
     * @return popularity - 人气
     */
    public Long getPopularity() {
        return popularity;
    }

    /**
     * 设置人气
     *
     * @param popularity 人气
     */
    public void setPopularity(Long popularity) {
        this.popularity = popularity;
    }

    /**
     * 获取视频状态：1、发布成功，2、禁播（管理员操作）
     *
     * @return status - 视频状态：1、发布成功，2、禁播（管理员操作）
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * 设置视频状态：1、发布成功，2、禁播（管理员操作）
     *
     * @param status 视频状态：1、发布成功，2、禁播（管理员操作）
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

    /**
     * 获取发布时间
     *
     * @return create_time - 发布时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置发布时间
     *
     * @param createTime 发布时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}