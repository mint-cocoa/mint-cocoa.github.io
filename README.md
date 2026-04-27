# mint-cocoa.github.io

Quarto로 렌더링되는 포트폴리오 허브입니다.

대표 허브와 짧은 라우팅 페이지는 GitHub Pages 루트에 두고,
`mint-cocoa.github.io/portfolio/`는 상세 문서 인덱스로 둡니다.
`portfolio.mintcocoa.cc`는 직접 만든 C++ 정적 파일 서버와 홈랩 Kubernetes 배포
경로를 검증하는 runtime demo로 분리합니다.

상세 문서는 [`mint-cocoa/portfolio`](https://github.com/mint-cocoa/portfolio)의
`docs/` 산출물을 참조합니다. 이 허브는 그 문서 인덱스, 서버/클라이언트/DevOps
문서, self-hosted runtime demo를 한 화면에서 연결합니다.

## 구조

| 경로 | 역할 |
|---|---|
| `_quarto.yml` | Quarto website 설정, GitHub 링크, 검색, footer, HTML 옵션 |
| `index.qmd` | 포트폴리오 허브 원본 문서 |
| `server.qmd` / `client.qmd` / `devops.qmd` | 상세 문서로 보내는 짧은 라우팅 페이지 |
| `runtime.qmd` | C++ `RuntimeWeb` 운영 데모 안내 라우팅 페이지 |
| `styles.css` | 랜딩 페이지 레이아웃과 반응형 스타일 |
| `.github/workflows/pages-deploy.yml` | Quarto 렌더링 후 GitHub Pages 배포 |

## URL 기준

| URL | 역할 |
|---|---|
| `https://mint-cocoa.github.io/` | 대표 허브 |
| `https://mint-cocoa.github.io/server.html` | 서버 문서 라우트 |
| `https://mint-cocoa.github.io/client.html` | 클라이언트 문서 라우트 |
| `https://mint-cocoa.github.io/devops.html` | DevOps 문서 라우트 |
| `https://mint-cocoa.github.io/runtime.html` | Runtime demo 라우트 |
| `https://mint-cocoa.github.io/portfolio/` | 상세 문서 인덱스 |
| `https://portfolio.mintcocoa.cc/` | C++ `RuntimeWeb` + 홈랩 Kubernetes 운영 데모 |

## 개발

```bash
quarto check
quarto preview
```

정적 결과물을 확인하려면 다음 명령을 사용합니다.

```bash
quarto render
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 Quarto를 설치하고 `_site/`로 렌더링한
뒤 GitHub Pages에 배포합니다.

Quarto 프로젝트는 `execute.freeze: auto`를 사용합니다. 현재 문서는 실행 코드가
없지만, 이후 Python/R/Julia 계산 셀이 추가되어도 변경된 원본 기준으로 결과를
관리할 수 있습니다.
