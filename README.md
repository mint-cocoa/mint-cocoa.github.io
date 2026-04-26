# mint-cocoa.github.io

GitHub Pages로 배포되는 포트폴리오 허브입니다.

이 저장소는 블로그 글 목록보다 프로젝트 문서의 진입점을 제공하는 역할을 합니다.
대표 공개 문서는 GitHub Pages에 두고, `portfolio.mintcocoa.cc`는 직접 만든 C++
정적 파일 서버와 홈랩 Kubernetes 배포 경로를 검증하는 runtime demo로 분리합니다.

## 주요 링크

- Game Server: https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html
- Game Client: https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html
- DevOps Homelab: https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html
- Runtime Demo: https://portfolio.mintcocoa.cc/
- GitOps Repo: https://github.com/mint-cocoa/home-k8s-gitops

## 개발

```bash
npm ci
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 Astro 정적 사이트를 빌드하고 GitHub
Pages에 배포합니다.
