package com.sfs.pojo;

import java.util.Date;
import javax.persistence.*;

import cn.afterturn.easypoi.excel.annotation.Excel;
import cn.afterturn.easypoi.excel.annotation.ExcelTarget;

@ExcelTarget("UserBehave")
@Table(name = "users_behavior")
public class UsersBehavior {
	@Excel(name = "id", width=20)
    @Id
    private String id;
	
	@Excel(name = "userId", width=20)
    @Column(name = "user_id")
    private String userId;

	@Excel(name = "behavior", width=20)
    private String behavior;
	
	@Excel(name = "target", width=20)
	private String target;
	
    /**
     * 如果 behavior 为 watch video，记录观看的视频
     */
    @Column(name = "video_id")
    private String videoId;
	
    @Column(name = "comment_id")
    private String commentId;
	
	@Excel(name = "createDate", width=20)
    @Column(name = "create_date")
    private Date createDate;

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
     * @return user_id
     */
    public String getUserId() {
        return userId;
    }

    /**
     * @param userId
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * @return behavior
     */
    public String getBehavior() {
        return behavior;
    }

    /**
     * @param behavior
     */
    public void setBehavior(String behavior) {
        this.behavior = behavior;
    }
    
    public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}
	
    /**
     * 获取如果 behavior 为 watch video，记录观看的视频
     *
     * @return video_id - 如果 behavior 为 watch video，记录观看的视频
     */
    public String getVideoId() {
        return videoId;
    }

    /**
     * 设置如果 behavior 为 watch video，记录观看的视频
     *
     * @param videoId 如果 behavior 为 watch video，记录观看的视频
     */
    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    /**
     * @return comment_id
     */
    public String getCommentId() {
        return commentId;
    }

    /**
     * @param commentId
     */
    public void setCommentId(String commentId) {
        this.commentId = commentId;
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

}