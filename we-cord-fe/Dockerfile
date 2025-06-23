# --- 1단계: 빌드(Build) 환경 ---
# Node.js 20의 lts(Long Term Support) 버전을 기반으로 빌드 환경을 구성합니다. 'builder'라는 별명을 붙입니다.
FROM node:20-alpine as builder

# 컨테이너 내부에 /app이라는 작업 디렉토리를 만듭니다.
WORKDIR /app

# 먼저 package.json과 package-lock.json(또는 yarn.lock 등)을 복사합니다.
# 이 파일들이 변경되지 않았다면, Docker는 다음 의존성 설치 단계를 캐시로부터 실행합니다.
COPY package.json package-lock.json ./

# npm을 사용해 프로젝트 의존성을 설치합니다.
RUN npm install

# 나머지 모든 소스 코드를 작업 디렉토리로 복사합니다.
COPY . .

# npm run build 명령어를 실행하여 React 애플리케이션을 빌드합니다.
# 빌드가 완료되면 /app/dist 폴더에 정적 파일(html, css, js)들이 생성됩니다.
RUN npm run build

# --- 2단계: 프로덕션(Production) 환경 ---
# 경량 웹서버인 Nginx의 안정적인 버전을 기반으로 최종 이미지를 만듭니다.
FROM nginx:stable-alpine

# 우리가 방금 작성한 커스텀 Nginx 설정을 컨테이너의 기본 설정 위치로 복사합니다.
# 이렇게 하면 Nginx가 우리의 리버스 프록시 규칙을 인지하고 동작하게 됩니다.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 1단계(builder)에서 생성된 빌드 결과물(/app/dist)을
# Nginx의 기본 정적 파일 제공 폴더(/usr/share/nginx/html)로 복사합니다.
COPY --from=builder /app/dist /usr/share/nginx/html

# 외부에 80번 포트를 개방하여 웹 서버에 접근할 수 있도록 합니다.
EXPOSE 80

# 컨테이너가 시작될 때 Nginx 서버를 실행하는 기본 명령어를 사용합니다.
# (Nginx 이미지는 기본 CMD가 설정되어 있으므로, 이 줄은 생략해도 동일하게 동작합니다)
CMD ["nginx", "-g", "daemon off;"] 