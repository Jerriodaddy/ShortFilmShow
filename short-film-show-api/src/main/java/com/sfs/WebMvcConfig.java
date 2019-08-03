package com.sfs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.sfs.controller.interceptor.UploadInterceptor;
import com.sfs.controller.interceptor.UserInterceptor;

@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {

	@Override
	protected void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**")
				.addResourceLocations("classpath:/META-INF/resources/")
				.addResourceLocations("file:/Users/jerrio/Desktop/JumboX/TheShortFilmShow/short-film-show/tmp/");
	}
	
	// 注册 MiniInterceptor
	@Bean
	public UserInterceptor userInterceptor() {
		return new UserInterceptor();
	}
	@Bean
	public UploadInterceptor uploadInterceptor() {
		return new UploadInterceptor();
	}

	@Override
	protected void addInterceptors(InterceptorRegistry registry) {
		
		registry.addInterceptor(userInterceptor()).addPathPatterns("/user/**")
				.addPathPatterns("/video/upLoad","/video/upLoadCover",
								"/video/userLike","/video/userUnlike")
				.excludePathPatterns("/user/queryPublisher");
		
		registry.addInterceptor(uploadInterceptor()).addPathPatterns("/user/uploadFace", "/video/upLoadCover");
		
		super.addInterceptors(registry);
	}
	
}
