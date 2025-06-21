import axios from "axios";
import i18n from "@/i18n"; // 1. i18n 인스턴스를 가져옵니다.

// 1. axios 인스턴스를 생성합니다.
const axiosInstance = axios.create({
  // 2. 백엔드 서버의 기본 URL을 설정합니다.
  //    앞으로 모든 요청은 이 주소를 기준으로 합니다.
  baseURL: "http://localhost:8080",
});

// 2. 요청 인터셉터를 추가합니다.
axiosInstance.interceptors.request.use(
  (config) => {
    // 3. 요청을 보내기 전에, i18n에서 현재 언어 값을 가져옵니다.
    const language = i18n.language;

    // 4. 기존 헤더에 Accept-Language를 설정합니다.
    if (language) {
      config.headers["Accept-Language"] = language;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 3. 생성한 인스턴스를 다른 파일에서 사용할 수 있도록 export 합니다.
export default axiosInstance;
