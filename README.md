# We-Cord 프로젝트

이 프로젝트는 실시간 채팅 기능을 제공하는 웹 애플리케이션 'We-Cord'의 소스 코드입니다. 프론트엔드와 백엔드가 분리된 모노레포 구조로 구성되어 있습니다.

## 🚀 프로젝트 구조

```
we-cord/
├── we-cord-be/  # 백엔드 (Spring Boot)
└── we-cord-fe/  # 프론트엔드 (React + TypeScript)
```

## 🛠️ 기술 스택

### 프론트엔드 (`we-cord-fe`)

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

### 백엔드 (`we-cord-be`)

- **Framework**: Spring Boot
- **Language**: Java
- **Build Tool**: Gradle

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
