# mint-cocoa.github.io

배진후 포트폴리오의 메인 진입점(Hub) 역할을 하는 React + Vite 기반의 랜딩 페이지입니다.

과거에는 Quarto로 구성되었으나 현재는 순수 React 앱으로 포트폴리오 첫인상과 상세 문서로의 매끄러운 라우팅만을 전담하도록 간소화 및 최적화되었습니다. 실제 상세 기술 문서(C++ 웹 서버, 게임 클라이언트, DevOps 등)는 [mint-cocoa/portfolio](https://github.com/mint-cocoa/portfolio) 리포지토리 안에서 관리되며 `mint-cocoa.github.io/portfolio/` 하위 경로에 서빙됩니다.

## 주요 링크

- **대표 허브 (현재 레포):** [https://mint-cocoa.github.io/](https://mint-cocoa.github.io/)
- **상세 문서 인덱스:** [https://mint-cocoa.github.io/portfolio/](https://mint-cocoa.github.io/portfolio/)
- **Runtime Demo:** [https://portfolio.mintcocoa.cc/](https://portfolio.mintcocoa.cc/) (본인이 직접 개발한 C++ `RuntimeWeb` 서버가 홈랩 Kubernetes 위에서 문서를 라이브로 서빙하는 실제 운영 데모)

## 프로젝트 구조

```text
├── src/
│   ├── main.tsx          # 메인 랜딩 페이지 UI 컴포넌트
│   ├── styles.css        # CSS 모듈 (루트 레벨에서 이동하여 정리됨)
│   └── assets/           # 포트폴리오 썸네일 이미지 및 리소스
├── index.html            # Vite 진입점 문서 (최상단으로 정리됨)
├── vite.config.ts        # Vite 빌드 설정 (_site 출력)
├── package.json          # Node 의존성 (React, Lucide Icon 등)
└── .github/workflows/    # GitHub Pages 자동 배포 파이프라인
```

## 로컬 개발 및 빌드

빠르게 띄워볼 수 있도록 단순화하였습니다.

```bash
# 의존성 설치
npm ci

# 로컬 개발 서버 접속
npm run dev

# 프로덕션 빌드 및 로컬 프리뷰
npm run build
npm run preview -- --port 4173
```

## GitHub Actions 배포 (CI/CD)

`main` 브랜치에 코드가 푸시되면 `.github/workflows/pages-deploy.yml` 워크플로우를 통해 자동으로 빌드 및 배포됩니다.

1. **Setup Node**: Node.js 22버전 환경 구성
2. **Install**: `npm ci` 의존성 설치
3. **Build**: `npm run build` 스크립트를 통해 `_site/` 디렉터리에 정적 파일 번들링
4. **Deploy**: 빌드된 아티팩트를 GitHub Pages로 릴리즈
