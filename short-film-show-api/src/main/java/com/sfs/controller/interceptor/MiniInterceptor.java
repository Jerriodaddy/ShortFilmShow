package com.sfs.controller.interceptor;

import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.sfs.utils.JSONResult;
import com.sfs.utils.JsonUtils;
import com.sfs.utils.RedisOperator;

public class MiniInterceptor implements HandlerInterceptor {

	@Autowired
	public RedisOperator redis;

	public static final String USER_REDIS_SESSION = "user-redis-session"; // Final 均大写

	/**
	 * 拦截请求，在 controller 调用之前
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		String userId = request.getHeader("userId");
		String userToken = request.getHeader("userToken");
		
//		System.out.println("userId=" + userId);
//		System.out.println("userToken=" + userToken);
//		returnErrorResponse(response, new JSONResult().errorTokenMsg("Please login"));
		
		if (StringUtils.isNoneBlank(userId) && StringUtils.isNoneBlank(userToken)) {
			String uniqueToken = redis.get(USER_REDIS_SESSION + ":" + userId);

			System.out.println("userId=" + userId);
			System.out.println("userToken=" + userToken);
			System.out.println("uniqueToken=" + uniqueToken);
			
			if (StringUtils.isEmpty(uniqueToken) && StringUtils.isBlank(uniqueToken)) {
				System.out.println("Please login");
				returnErrorResponse(response, new JSONResult().errorTokenMsg("Please login"));
				return false;
			} else if (!uniqueToken.equals(userToken)) {
				System.out.println("Account are logged on to other mobile phone.");
				returnErrorResponse(response,new JSONResult().errorTokenMsg("Account are logged on to other mobile phone."));
				return false;
			}
		} else {
			System.out.println("Please login");
			returnErrorResponse(response, new JSONResult().errorTokenMsg("Please login"));
			return false;
		}
		// return false: 请求被拦截，返回
		// return true : 放行
		return true;
	}

	public void returnErrorResponse(HttpServletResponse response, JSONResult result)
			throws IOException, UnsupportedEncodingException {
		OutputStream out = null;
		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/json");
			out = response.getOutputStream();
			out.write(JsonUtils.objectToJson(result).getBytes("utf-8"));
			out.flush();
		} finally {
			if (out != null) {
				out.close();
			}
		}
	}

	/**
	 * 请求 controller 之后，渲染视图之前
	 */
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
	}

	/**
	 * 请求 controller 之后，渲染视图之后
	 */
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
	}

}
