package com.sfs.pojo;

import javax.persistence.*;

public class Videos {
    @Id
    private Integer id;

    /**
     * 作者id
     */
    @Column(name = "user_id")
    private String userId;

    /**
     * 发布时间
     */
    @Column(name = "create_time")
    private String createTime;

    /**
     * 栏目
     */
    private String category;

    /**
     * 视频路径
     */
    @Column(name = "video_path")
    private String videoPath;

    /**
     * 赞数
     */
    @Column(name = "like_num")
    private String likeNum;

    /**
     * 踩数
     */
    @Column(name = "dislike_num")
    private String dislikeNum;

    /**
     * 评论数
     */
    @Column(name = "comment_num")
    private String commentNum;

    /**
     * 视频时长
     */
    @Column(name = "video_time")
    private String videoTime;

    /**
     * 人气
     */
    private String popularity;

    /**
     * 封面路径
     */
    @Column(name = "cover_path")
    private String coverPath;

    /**
     * 视频状态：1、发布成功，2、禁播（管理员操作）
     */
    private String status;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
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
     * 获取发布时间
     *
     * @return create_time - 发布时间
     */
    public String getCreateTime() {
        return createTime;
    }

    /**
     * 设置发布时间
     *
     * @param createTime 发布时间
     */
    public void setCreateTime(String createTime) {
        this.createTime = createTime;
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
     * 获取赞数
     *
     * @return like_num - 赞数
     */
    public String getLikeNum() {
        return likeNum;
    }

    /**
     * 设置赞数
     *
     * @param likeNum 赞数
     */
    public void setLikeNum(String likeNum) {
        this.likeNum = likeNum;
    }

    /**
     * 获取踩数
     *
     * @return dislike_num - 踩数
     */
    public String getDislikeNum() {
        return dislikeNum;
    }

    /**
     * 设置踩数
     *
     * @param dislikeNum 踩数
     */
    public void setDislikeNum(String dislikeNum) {
        this.dislikeNum = dislikeNum;
    }

    /**
     * 获取评论数
     *
     * @return comment_num - 评论数
     */
    public String getCommentNum() {
        return commentNum;
    }

    /**
     * 设置评论数
     *
     * @param commentNum 评论数
     */
    public void setCommentNum(String commentNum) {
        this.commentNum = commentNum;
    }

    /**
     * 获取视频时长
     *
     * @return video_time - 视频时长
     */
    public String getVideoTime() {
        return videoTime;
    }

    /**
     * 设置视频时长
     *
     * @param videoTime 视频时长
     */
    public void setVideoTime(String videoTime) {
        this.videoTime = videoTime;
    }

    /**
     * 获取人气
     *
     * @return popularity - 人气
     */
    public String getPopularity() {
        return popularity;
    }

    /**
     * 设置人气
     *
     * @param popularity 人气
     */
    public void setPopularity(String popularity) {
        this.popularity = popularity;
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
     * 获取视频状态：1、发布成功，2、禁播（管理员操作）
     *
     * @return status - 视频状态：1、发布成功，2、禁播（管理员操作）
     */
    public String getStatus() {
        return status;
    }

    /**
     * 设置视频状态：1、发布成功，2、禁播（管理员操作）
     *
     * @param status 视频状态：1、发布成功，2、禁播（管理员操作）
     */
    public void setStatus(String status) {
        this.status = status;
    }
}