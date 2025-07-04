package com.wecord.we_cord_be.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // /api/ 로 시작하는 모든 경로에 대해
                .allowedOrigins("http://localhost:5173") // 프론트엔드 개발 서버의 주소를 허용
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // 허용할 HTTP 메서드
                .allowedHeaders("*") // 모든 종류의 HTTP 헤더를 허용
                .allowCredentials(true) // 쿠키 등 자격 증명 정보 허용
                .maxAge(3600); // pre-flight 요청의 캐시 시간(초)
    }
} 