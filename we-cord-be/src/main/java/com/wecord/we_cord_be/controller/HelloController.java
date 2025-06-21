package com.wecord.we_cord_be.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

// @RestController: 이 클래스가 REST API를 처리하는 컨트롤러임을 Spring에게 알려줍니다.
// 이 어노테이션 덕분에, 각 메소드의 반환값은 자동으로 JSON이나 문자열 형태로 변환되어 응답 본문에 담기게 됩니다.
@RestController
@RequiredArgsConstructor // final 필드에 대한 생성자를 자동으로 만들어줍니다.
public class HelloController {

    // 1. MessageSource를 의존성으로 주입받습니다.
    //    이 객체는 messages.properties 파일에서 메시지를 읽어오는 역할을 합니다.
    private final MessageSource messageSource;

    @GetMapping("/api/hello")
    // 2. 파라미터로 Locale 객체를 받습니다.
    //    Spring이 HTTP 요청의 Accept-Language 헤더를 분석해서 자동으로 적절한 Locale 객체를 넣어줍니다.
    public String hello(Locale locale) {
        // 3. messageSource.getMessage()를 사용하여 메시지를 가져옵니다.
        //    - "hello.message": 우리가 properties 파일에 정의할 메시지의 키(key)입니다.
        //    - null: 메시지에 들어갈 파라미터가 없을 경우 null을 전달합니다.
        //    - locale: 어떤 언어의 메시지를 가져올지 결정합니다.
        return messageSource.getMessage("hello.message", null, locale);
    }
}