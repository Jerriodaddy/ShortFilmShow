package com.sfs.pojo.vo;

import java.util.Date;
import javax.persistence.*;

public class CommentsVO {
	@Id
	private String id;

	/**
	 * 所属文章id
	 */
	@Column(name = "video_id")
	private String videoId;

	/**
	 * 评论人
	 */

	private String fromUserId;
	private Date createDate;
	private Long dislikeNum;
	private Long likeNum;
	private String comment;
    private String fatherCommentId;
    private String toUserId;

	// What is added
	private String faceImage;
	private String nickname;
	private String toNickname;
	private String timeAgoStr;

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

	public String getToNickname() {
		return toNickname;
	}

	public void setToNickname(String toNickname) {
		this.toNickname = toNickname;
	}

	public String getTimeAgoStr() {
		return timeAgoStr;
	}

	public void setTimeAgoStr(String timeAgoStr) {
		this.timeAgoStr = timeAgoStr;
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

	public String getFatherCommentId() {
		return fatherCommentId;
	}

	public void setFatherCommentId(String fatherCommentId) {
		this.fatherCommentId = fatherCommentId;
	}

	public String getToUserId() {
		return toUserId;
	}

	public void setToUserId(String toUserId) {
		this.toUserId = toUserId;
	}
}