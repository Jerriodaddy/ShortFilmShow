package com.sfs.pojo;

import java.util.Date;
import javax.persistence.*;

public class Comments {
    @Id
    private String id;

    /**
     * 所属视频id
     */
    @Column(name = "video_id")
    private String videoId;

    /**
     * 评论人
     */
    @Column(name = "from_user_id")
    private String fromUserId;

    @Column(name = "create_date")
    private Date createDate;

    @Column(name = "dislike_num")
    private Long dislikeNum;

    @Column(name = "like_num")
    private Long likeNum;

    @Column(name = "father_comment_id")
    private String fatherCommentId;

    @Column(name = "to_user_id")
    private String toUserId;

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
     * 获取所属视频id
     *
     * @return video_id - 所属视频id
     */
    public String getVideoId() {
        return videoId;
    }

    /**
     * 设置所属视频id
     *
     * @param videoId 所属视频id
     */
    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    /**
     * 获取评论人
     *
     * @return from_user_id - 评论人
     */
    public String getFromUserId() {
        return fromUserId;
    }

    /**
     * 设置评论人
     *
     * @param fromUserId 评论人
     */
    public void setFromUserId(String fromUserId) {
        this.fromUserId = fromUserId;
    }

    /**
     * @return create_date
     */
    public Date getCreateDate() {
        return createDate;
    }

    /**
     * @param createDate
     */
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    /**
     * @return dislike_num
     */
    public Long getDislikeNum() {
        return dislikeNum;
    }

    /**
     * @param dislikeNum
     */
    public void setDislikeNum(Long dislikeNum) {
        this.dislikeNum = dislikeNum;
    }

    /**
     * @return like_num
     */
    public Long getLikeNum() {
        return likeNum;
    }

    /**
     * @param likeNum
     */
    public void setLikeNum(Long likeNum) {
        this.likeNum = likeNum;
    }

    /**
     * @return father_comment_id
     */
    public String getFatherCommentId() {
        return fatherCommentId;
    }

    /**
     * @param fatherCommentId
     */
    public void setFatherCommentId(String fatherCommentId) {
        this.fatherCommentId = fatherCommentId;
    }

    /**
     * @return to_user_id
     */
    public String getToUserId() {
        return toUserId;
    }

    /**
     * @param toUserId
     */
    public void setToUserId(String toUserId) {
        this.toUserId = toUserId;
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