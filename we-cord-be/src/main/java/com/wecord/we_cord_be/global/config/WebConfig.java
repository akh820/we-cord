package com.wecord.we_cord_be.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 API 경로에 대해 CORS 설정을 적용합니다.
                .allowedOrigins("http://localhost:5173") // 프론트엔드 개발 서버의 주소만 명시적으로 허용합니다.
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // 허용할 HTTP 메서드를 지정합니다.
                .allowedHeaders("*") // 모든 종류의 HTTP 헤더를 허용합니다.
                .allowCredentials(true) // 쿠키나 인증 헤더 등 자격 증명이 필요한 요청을 허용합니다. (JWT 사용 시 필수)
                .maxAge(3600); // 브라우저가 이 CORS 설정을 캐싱할 시간(초 단위)을 설정합니다.
    }
} 