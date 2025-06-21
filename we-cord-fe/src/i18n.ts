import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  // 1. i18next-http-backend 플러그인을 사용합니다.
  //    이 플러그인은 서버로부터 번역 파일을 로드하는 역할을 합니다.
  .use(Backend)
  // 2. i18next-browser-languagedetector 플러그인을 사용합니다.
  //    사용자의 브라우저 언어 설정을 자동으로 감지합니다.
  .use(LanguageDetector)
  // 3. react-i18next를 초기화하고 i18n 인스턴스를 전달합니다.
  .use(initReactI18next)
  .init({
    // 4. 기본 언어를 'ko'로 설정합니다.
    //    만약 감지된 언어에 대한 번역 파일이 없을 경우 이 언어가 사용됩니다.
    fallbackLng: "ko",
    debug: true, // 개발 중에 콘솔에 디버그 정보를 출력합니다.

    // 5. 번역 네임스페이스와 키 구분자 등을 설정합니다.
    interpolation: {
      escapeValue: false, // React는 이미 XSS 방어 기능이 있으므로 false로 설정합니다.
    },

    // 6. i18next-http-backend 플러그인의 설정을 정의합니다.
    backend: {
      // 번역 파일이 위치한 경로를 지정합니다.
      // '/locales/{{lng}}/{{ns}}.json' -> /locales/ko/translation.json
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
