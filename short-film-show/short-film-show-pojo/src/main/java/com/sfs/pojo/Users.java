package com.sfs.pojo;

import java.util.Date;
import javax.persistence.*;

public class Users {
    @Id
    private String id;

    /**
     * 昵称
     */
    private String username;

    private String password;

    private String email;

    private String nickname;

    @Column(name = "create_date")
    private Date createDate;

    @Column(name = "face_image")
    private String faceImage;

    @Column(name = "fans_num")
    private Integer fansNum;

    @Column(name = "follow_num")
    private Integer followNum;

    /**
     * 0 : Woman
     * 1 : Man 
     */
    private Integer gender;

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
     * 获取昵称
     *
     * @return username - 昵称
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置昵称
     *
     * @param username 昵称
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return nickname
     */
    public String getNickname() {
        return nickname;
    }

    /**
     * @param nickname
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
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
     * @return face_image
     */
    public String getFaceImage() {
        return faceImage;
    }

    /**
     * @param faceImage
     */
    public void setFaceImage(String faceImage) {
        this.faceImage = faceImage;
    }

    /**
     * @return fans_num
     */
    public Integer getFansNum() {
        return fansNum;
    }

    /**
     * @param fansNum
     */
    public void setFansNum(Integer fansNum) {
        this.fansNum = fansNum;
    }

    /**
     * @return follow_num
     */
    public Integer getFollowNum() {
        return followNum;
    }

    /**
     * @param followNum
     */
    public void setFollowNum(Integer followNum) {
        this.followNum = followNum;
    }

    /**
     * 获取0 : Woman 1: Man
     *
     * @return gender - 0 : Woman 1: Man
     */
    public Integer getGender() {
        return gender;
    }

    /**
     * 设置0 : Woman 1: Man
     *
     * @param gender 0 : Woman 1: Man
     */
    public void setGender(Integer gender) {
        this.gender = gender;
    }
}