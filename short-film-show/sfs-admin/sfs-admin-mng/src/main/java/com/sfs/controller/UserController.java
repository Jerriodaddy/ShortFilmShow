package com.sfs.controller;

import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sfs.bean.AdminUser;
import com.sfs.service.UsersService;
import com.sfs.utils.JSONResult;

@Controller
@RequestMapping("users")
public class UserController {
	
	@Autowired
	private UsersService usersService;
	
//	@GetMapping("/showList")
//	public String showList() {
//		return "users/usersList";
//	}
//	
//	@PostMapping("/list")
//	@ResponseBody
//	public PagedResult list(Users user , Integer page) {
//		
//		PagedResult result = usersService.queryUsers(user, page == null ? 1 : page, 10);
//		return result;
//	}
	

	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@PostMapping("login")
	@ResponseBody
	public JSONResult userLogin(String username, String password,
			HttpServletRequest request, HttpServletResponse response) {
		
		// TODO 模拟登陆
		if (StringUtils.isBlank(username) || StringUtils.isBlank(password)) {
			return JSONResult.errorMap("用户名和密码不能为空");
		} else if (username.equals("admin") && password.equals("sfsadmin")) {
			
			String token = UUID.randomUUID().toString();
			AdminUser user = new AdminUser(username, password, token);
			request.getSession().setAttribute("sessionUser", user);
			return JSONResult.ok();
		}
		
		return JSONResult.errorMsg("登陆失败，请重试...");
	}
	
	@GetMapping("/logout")
	public String logout(HttpServletRequest request, HttpServletResponse response) {
		request.getSession().removeAttribute("sessionUser");
		return "login";
	}
	
}
