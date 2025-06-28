import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa"; // 1. VitePWA import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. VitePWA 플러그인 추가 및 설정
    VitePWA({
      registerType: "autoUpdate", // 서비스 워커 자동 업데이트 전략 설정
      devOptions: {
        enabled: true, // 개발 환경에서도 PWA 기능 활성화
      },
      // 3. 웹 앱 매니페스트 설정
      manifest: {
        name: "We-Cord",
        short_name: "We-Cord",
        description: "우리를 기록하다",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshot-desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
            label: "We-Cord 데스크탑 화면",
          },
          {
            src: "screenshot-mobile.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
            label: "We-Cord 모바일 화면",
          },
        ],
      },
      // 4. 서비스 워커 동작 제어
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // 캐싱할 파일 패턴
      },
    }),
  ],
  server: {
    proxy: {
      // '/api'로 시작하는 요청은 백엔드 서버로 프록시합니다.
      "/api": {
        target: "http://localhost:8080", // 백엔드 서버 주소
        changeOrigin: true, // 요청의 Origin 헤더를 백엔드 서버와 일치시킵니다.
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
