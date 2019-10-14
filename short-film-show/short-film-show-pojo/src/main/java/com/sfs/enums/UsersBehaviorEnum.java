package com.sfs.enums;

public enum UsersBehaviorEnum {
	
	LOGIN(1, "Login"),
	LOGOUT(2, "Logout"),	
	PLAYVIDEO(3, "Play video"),
	EXITVIDEO(4, "Exit video page"),
	COMMENTVIDEO(5, "Comment a video"),
	LIKEVIDEO(6, "Like a video"),
	LIKECOMMENT(7, "Like a comment"),
	GOTOPAGE(8, "Go to page");
	
	public final Integer type;
	public final String content;
	
	UsersBehaviorEnum(Integer type, String content){
		this.type = type;
		this.content = content;
	}
	
	public Integer getType() {
		return type;
	}  
}
