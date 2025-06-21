# We-Cord 프로젝트

이 프로젝트는 실시간 채팅 기능을 제공하는 웹 애플리케이션 'We-Cord'의 소스 코드입니다. 프론트엔드와 백엔드가 분리된 모노레포 구조로 구성되어 있습니다.

## 🚀 프로젝트 구조

```
we-cord/
├── we-cord-be/  # 백엔드 (Spring Boot, Java)
└── we-cord-fe/  # 프론트엔드 (React, TypeScript)
```

## 🛠️ 기술 스택 (Tech Stack)

### 프론트엔드 (`we-cord-fe`)

| 구분           | 기술               | 버전     | 역할                                        |
| -------------- | ------------------ | -------- | ------------------------------------------- |
| 언어           | `TypeScript`       | ~5.8.3   | 정적 타입 지원, 코드 안정성 향상            |
| 프레임워크     | `React`            | ^19.1.0  | UI 라이브러리                               |
| 빌드 도구      | `Vite`             | ^6.3.5   | 빠르고 효율적인 프론트엔드 빌드 시스템      |
| 스타일링       | `Tailwind CSS`     | ^3.4.4   | Utility-First 방식의 CSS 프레임워크         |
| 라우팅         | `React Router DOM` | ^6.30.1  | 클라이언트 사이드 라우팅 관리               |
| 서버 상태 관리 | `TanStack Query`   | ^5.80.10 | 서버 데이터 Fetching, Caching, 동기화       |
| UI 컴포넌트    | `shadcn/ui`        | -        | Radix UI 기반의 재사용 가능한 컴포넌트 모음 |

### 백엔드 (`we-cord-be`)

| 구분            | 기술          | 버전  | 역할                                               |
| --------------- | ------------- | ----- | -------------------------------------------------- |
| 언어            | `Java`        | 17    | 백엔드 주력 개발 언어                              |
| 프레임워크      | `Spring Boot` | 3.5.3 | Java 기반의 웹 애플리케이션 프레임워크             |
| 빌드 도구       | `Gradle`      | -     | 의존성 관리 및 프로젝트 빌드                       |
| 핵심 라이브러리 | `Spring Web`  | -     | RESTful API 개발 및 웹 기능 지원                   |
| 유틸리티        | `Lombok`      | -     | 어노테이션 기반 코드 자동 생성 (Getter, Setter 등) |

## 📁 디렉토리 구조

이 프로젝트는 기능과 역할에 따라 명확하게 분리된 디렉토리 구조를 따릅니다.

### 프론트엔드 (`we-cord-fe`)

```
we-cord-fe/
├── public/              # Vite가 처리하지 않는 정적 파일 (e.g., favicon)
├── src/                 # 애플리케이션의 핵심 소스 코드
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   │   └── ui/          # shadcn/ui로 생성된 기본 UI 블록
│   ├── lib/             # 공통 유틸리티 함수 (e.g., clsx, tailwind-merge)
│   ├── App.tsx          # 메인 애플리케이션 레이아웃 및 라우팅 설정
│   └── main.tsx         # React 앱의 진입점(Entry Point)
├── index.html           # 앱의 기본 HTML 템플릿
├── package.json         # 프로젝트 의존성 및 스크립트 관리
├── tsconfig.json        # 전체 TypeScript 설정
├── tsconfig.app.json    # 애플리케이션 소스 코드에 대한 TypeScript 설정
└── vite.config.ts       # Vite 빌드 도구 설정
```

### 백엔드 (`we-cord-be`)

```
we-cord-be/
├── build.gradle         # Gradle 빌드 스크립트 및 의존성 관리
├── gradlew              # Gradle Wrapper (로컬에 Gradle 설치 없이 빌드 실행)
└── src/                 # 백엔드 애플리케이션 소스 코드
    └── main/
        ├── java/
        │   └── com/wecord/we_cord_be/
        │       ├── controller/  # HTTP 요청을 받는 API 엔드포인트
        │       ├── service/     # 비즈니스 로직 처리 (생성 예정)
        │       ├── repository/  # 데이터베이스 연동 (생성 예정)
        │       └── WeCordBeApplication.java  # Spring Boot 애플리케이션의 시작점
        └── resources/
            └── application.properties     # 애플리케이션의 주요 설정 (DB 정보, 포트 등)
```

## 🏁 시작하기

### 프론트엔드 실행

1.  **프론트엔드 디렉토리로 이동:**

    ```bash
    cd we-cord-fe
    ```

2.  **의존성 설치:**

    ```bash
    npm install
    ```

3.  **개발 서버 실행:**
    ```bash
    npm run dev
    ```

### 백엔드 실행

1.  **백엔드 디렉토리로 이동:**

    ```bash
    cd we-cord-be
    ```

2.  **애플리케이션 빌드:**

    ```bash
    ./gradlew build
    ```

3.  **애플리케이션 실행:**
    ```bash
    java -jar build/libs/*.jar
    ```
