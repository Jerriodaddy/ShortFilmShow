package com.sfs.pojo;

import javax.persistence.*;

public class Comments {
    @Id
    private String id;

    /**
     * 所属文章id
     */
    @Column(name = "video_id")
    private String videoId;

    /**
     * p
     */
    @Column(name = "from_user_id")
    private String fromUserId;

    @Column(name = "create_time")
    private String createTime;

    @Column(name = "dislike_num")
    private Integer dislikeNum;

    @Column(name = "like_num")
    private Integer likeNum;

    private String comment;

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
     * 获取所属文章id
     *
     * @return video_id - 所属文章id
     */
    public String getVideoId() {
        return videoId;
    }

    /**
     * 设置所属文章id
     *
     * @param videoId 所属文章id
     */
    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    /**
     * 获取p
     *
     * @return from_user_id - p
     */
    public String getFromUserId() {
        return fromUserId;
    }

    /**
     * 设置p
     *
     * @param fromUserId p
     */
    public void setFromUserId(String fromUserId) {
        this.fromUserId = fromUserId;
    }

    /**
     * @return create_time
     */
    public String getCreateTime() {
        return createTime;
    }

    /**
     * @param createTime
     */
    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    /**
     * @return dislike_num
     */
    public Integer getDislikeNum() {
        return dislikeNum;
    }

    /**
     * @param dislikeNum
     */
    public void setDislikeNum(Integer dislikeNum) {
        this.dislikeNum = dislikeNum;
    }

    /**
     * @return like_num
     */
    public Integer getLikeNum() {
        return likeNum;
    }

    /**
     * @param likeNum
     */
    public void setLikeNum(Integer likeNum) {
        this.likeNum = likeNum;
    }

    /**
     * @return comment
     */
    public String getComment() {
        return comment;
    }

    /**
     * @param comment
     */
    public void setComment(String comment) {
        this.comment = comment;
    }
}