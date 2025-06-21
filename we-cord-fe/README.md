# We-Cord FE (프론트엔드)

이 프로젝트는 We-Cord 서비스의 프론트엔드 레포지토리입니다. 최신 기술 스택을 활용하여 빠르고 안정적인 사용자 경험을 제공하는 것을 목표로 합니다.

## 📂 폴더 구조 및 주요 파일

이 프로젝트의 전체적인 구조와 각 파일 및 폴더의 역할은 다음과 같습니다.

```
we-cord-fe/
├── .vscode/            # VSCode 에디터 설정
├── node_modules/       # 설치된 라이브러리(패키지) 저장소
├── public/             # 정적 파일 (favicon 등)
├── src/                # ⭐ 핵심 소스 코드
│   ├── components/     # 재사용 가능한 UI 컴포넌트
│   │   └── ui/         # shadcn/ui가 설치한 컴포넌트
│   ├── lib/            # 유틸리티 함수
│   │   └── utils.ts    # shadcn/ui가 생성한 헬퍼 함수
│   ├── App.tsx         # 최상위 메인 컴포넌트
│   ├── main.tsx        # React 앱의 진입점
│   └── index.css       # 전역 스타일 및 Tailwind, shadcn/ui 변수
├── .eslintrc.cjs       # ESLint (코드 스타일 검사) 설정
├── .gitignore          # Git이 추적하지 않을 파일/폴더 목록
├── index.html          # 최종적으로 보여질 유일한 HTML 파일
├── package.json        # 프로젝트 정보 및 의존성 목록
├── postcss.config.js   # PostCSS 설정 (Tailwind CSS가 사용)
├── README.md           # 프로젝트 안내 문서 (바로 이 파일)
├── tailwind.config.js  # Tailwind CSS 상세 설정 (테마, 플러그인 등)
├── tsconfig.json       # TypeScript 컴파일러 설정
└── vite.config.ts      # Vite 개발 서버 및 빌드 설정
```

## 🚀 기술 스택 (Tech Stack)

이 프로젝트는 안정성이 검증된 최신 기술들을 조합하여 구성되었습니다. 각 기술을 선택한 이유는 다음과 같습니다.

| 분야 (Category)       | 기술 (Technology)                                                 | 버전 (Version) | 선택 이유 및 참고사항                                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **코어 (Core)**       | [React](https://react.dev/)                                       | `19.x`         | **선언적 UI 및 컴포넌트 기반 아키텍처:** React 19의 최신 기능을 활용하여 코드의 재사용성을 높이고, 복잡한 UI를 효율적으로 관리하기 위해 채택했습니다.                                                                                     |
|                       | [TypeScript](https://www.typescriptlang.org/)                     | `5.x`          | **정적 타입 시스템:** 컴파일 단계에서 오류를 감지하여 코드의 안정성을 극대화하고, 명확한 타입 정의를 통해 협업 및 유지보수 효율성을 높이기 위해 사용했습니다.                                                                             |
| **개발 환경 (Dev)**   | [Vite](https://vitejs.dev/)                                       | `6.x`          | **빠른 개발 서버 및 빌드 속도:** esbuild 기반의 빠른 번들링 속도로 개발 생산성을 극대화하고, HMR(Hot Module Replacement)을 통해 즉각적인 피드백을 받으며 개발 경험을 향상시키기 위해 선택했습니다.                                        |
| **UI 컴포넌트**       | [shadcn/ui](https://ui.shadcn.com/)                               | `latest`       | **경량 UI 컴포넌트:** 완성된 형태가 아닌, **소스 코드를 직접 프로젝트에 추가**하는 방식이라 자유로운 수정과 확장이 가능합니다. Tailwind CSS와 완벽하게 통합되어 일관된 디자인 시스템을 구축하고 유지보수 효율을 높이기 위해 채택했습니다. |
| **라우팅 (Routing)**  | [React Router](https://reactrouter.com/)                          | `6.x`          | **React 라우팅 표준:** React 기반 SPA(Single Page Application) 라우팅의 사실상 표준 라이브러리입니다. v6는 안정적이며 방대한 레퍼런스를 보유하고 있어 문제 해결에 용이합니다.                                                             |
| **상태 관리 (State)** | [TanStack Query (React Query)](https://tanstack.com/query/latest) | `v5.x`         | **서버 상태 관리:** 서버 데이터 페칭, 캐싱, 동기화 등 비동기 로직을 선언적으로 관리하기 위해 채택했습니다. 로딩 및 에러 상태를 자동으로 처리하여 비즈니스 로직에 집중할 수 있도록 돕습니다.                                               |
| **스타일링 (CSS)**    | [Tailwind CSS](https://tailwindcss.com/)                          | `3.x`          | **유틸리티 우선 CSS 프레임워크:** 미리 정의된 유틸리티 클래스를 조합하여 HTML 내에서 빠르게 스타일을 구축할 수 있습니다. 디자인 시스템의 일관성을 유지하고, 반응형 디자인을 효율적으로 구현하기 위해 선택했습니다.                        |

## ⚙️ 프로젝트 설정 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

## 🤝 Git & GitHub 연동

이 프로젝트는 Git으로 버전 관리되며, GitHub를 통해 코드가 호스팅됩니다.

```bash
# 로컬 저장소 초기화
git init -b main

# 원격 저장소 연결 (아래 URL은 예시입니다)
git remote add origin https://github.com/your-username/we-cord-fe.git

# 첫 커밋 및 푸시
git add .
git commit -m "Initial commit: 프로젝트 기본 설정 및 README 작성"
git push -u origin main
```
