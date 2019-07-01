package com.sfs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.sfs.controller.interceptor.MiniInterceptor;

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
	public MiniInterceptor miniInterceptor() {
		return new MiniInterceptor();
	}

	@Override
	protected void addInterceptors(InterceptorRegistry registry) {
		
		registry.addInterceptor(miniInterceptor()).addPathPatterns("/user/**")
				.addPathPatterns("/video/upLoad","/video/upLoadCover",
								"/video/userLike","/video/userUnlike")
				.excludePathPatterns("/user/queryPublisher");
		
		super.addInterceptors(registry);
	}
	
}
