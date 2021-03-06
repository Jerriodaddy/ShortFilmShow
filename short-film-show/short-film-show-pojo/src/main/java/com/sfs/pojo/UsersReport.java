package com.sfs.pojo;

import java.util.Date;

import javax.persistence.*;

@Table(name = "users_report")
public class UsersReport {
    @Id
    private String id;

    @Column(name = "deal_user_id")
    private String dealUserId;

    @Column(name = "deal_video_id")
    private String dealVideoId;

    private String title;

    private String content;

    /**
     * 举报者的id
     */
    @Column(name = "user_id")
    private String userId;

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
     * @return deal_user_id
     */
    public String getDealUserId() {
        return dealUserId;
    }

    /**
     * @param dealUserId
     */
    public void setDealUserId(String dealUserId) {
        this.dealUserId = dealUserId;
    }

    /**
     * @return deal_video_id
     */
    public String getDealVideoId() {
        return dealVideoId;
    }

    /**
     * @param dealVideoId
     */
    public void setDealVideoId(String dealVideoId) {
        this.dealVideoId = dealVideoId;
    }

    /**
     * @return title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return content
     */
    public String getContent() {
        return content;
    }

    /**
     * @param content
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     * 获取举报者的id
     *
     * @return user_id - 举报者的id
     */
    public String getUserId() {
        return userId;
    }

    /**
     * 设置举报者的id
     *
     * @param userId 举报者的id
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * @return create_date
     */
    public Date getCreateDate() {
        return createDate;
    }

    /**
     * @param date
     */
    public void setCreateDate(Date date) {
        this.createDate = date;
    }
}