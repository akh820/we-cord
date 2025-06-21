package com.wecord.we_cord_be.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// @RestController: 이 클래스가 REST API를 처리하는 컨트롤러임을 Spring에게 알려줍니다.
// 이 어노테이션 덕분에, 각 메소드의 반환값은 자동으로 JSON이나 문자열 형태로 변환되어 응답 본문에 담기게 됩니다.
@RestController
public class HelloController {

    // @GetMapping("/api/hello"):
    // HTTP GET 요청을 처리하는 메소드임을 나타냅니다.
    // 클라이언트(예: 웹 브라우저)가 우리 서버의 "/api/hello"라는 주소로 GET 요청을 보내면,
    // 바로 아래의 hello() 메소드가 실행됩니다.
    @GetMapping("/api/hello")
    public String hello() {
        // 이 메소드는 "안녕하세요! 백엔드 서버입니다." 라는 단순한 문자열을 반환합니다.
        // @RestController 덕분에, 이 문자열이 HTTP 응답의 본문(body)이 되어 클라이언트에게 전달됩니다.
        return "안녕하세요! 백엔드 서버입니다.Test123";
    }
}