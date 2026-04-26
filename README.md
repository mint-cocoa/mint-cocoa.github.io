# mint-cocoa.github.io

Quarto로 렌더링되는 포트폴리오 허브입니다.

대표 공개 문서는 GitHub Pages에 두고, `portfolio.mintcocoa.cc`는 직접 만든 C++
정적 파일 서버와 홈랩 Kubernetes 배포 경로를 검증하는 runtime demo로 분리합니다.

## 개발

```bash
quarto preview
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 Quarto를 설치하고 `_site/`로 렌더링한
뒤 GitHub Pages에 배포합니다.
