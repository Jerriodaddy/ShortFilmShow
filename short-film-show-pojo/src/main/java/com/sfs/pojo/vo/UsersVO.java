package com.sfs.pojo.vo;

import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sfs.pojo.Users;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "User pojo", description = "This is the user object")
public class UsersVO {
	@ApiModelProperty(hidden = true)
    private String id;
	
	@ApiModelProperty(hidden = true) 
	private String userToken;
    /**
     * 昵称
     */
    @ApiModelProperty(value = "username", example = "username",required = true)
    private String username;
    
    @ApiModelProperty(value = "password", example = "123456",required = true)
    @JsonIgnore
    private String password;
    
    private String email;

    @ApiModelProperty(hidden = true)
    private String nickname;

    @ApiModelProperty(hidden = true)
    private Date createDate;

    @ApiModelProperty(hidden = true)
    private String faceImage;

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
    
    public String getUserToken() {
    	return this.userToken;
	}
    
    public void setUserToken(String userToken) {
		this.userToken = userToken;
	}
}