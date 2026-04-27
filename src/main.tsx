import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Cpu,
  ExternalLink,
  FileCode2,
  Gamepad2,
  GitBranch,
  Github,
  Network,
  Route,
  Server,
  ShieldCheck,
} from "lucide-react";
import "./styles.css";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FeatureCard = {
  title: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  accent: "blue" | "red" | "green";
  description: string;
  tags: string[];
};

type RouteCard = {
  title: string;
  url: string;
  description: string;
  tone: "primary" | "stable" | "runtime";
};

type RepoRow = {
  name: string;
  href: string;
  role: string;
};

const navLinks: NavLink[] = [
  { label: "문서 인덱스", href: "https://mint-cocoa.github.io/portfolio/", external: true },
  { label: "서버", href: "/server.html" },
  { label: "클라이언트", href: "/client.html" },
  { label: "DevOps", href: "/devops.html" },
  { label: "Runtime Demo", href: "/runtime.html" },
];

const featureCards: FeatureCard[] = [
  {
    title: "서버 구현",
    href: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html",
    icon: Server,
    accent: "blue",
    description:
      "iouring-runtime의 core Runtime 위에 RuntimeWeb, RuntimeProxy, RuntimeGame을 분리한 C++ 서버 런타임 구현입니다.",
    tags: ["C++", "io_uring", "RuntimeWeb", "RuntimeGame"],
  },
  {
    title: "클라이언트 구현",
    href: "https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html",
    icon: Gamepad2,
    accent: "red",
    description:
      "DirectX 11 멀티플레이 던전 RPG 클라이언트입니다. 렌더링, 씬 전환, 패킷 프로토콜을 구현 관점으로 정리했습니다.",
    tags: ["C++", "DirectX 11", "Networking", "RPG Client"],
  },
  {
    title: "홈랩 DevOps",
    href: "https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html",
    icon: Boxes,
    accent: "green",
    description:
      "GHCR, GitOps, Argo CD, MetalLB, ingress-nginx 기반 홈랩 Kubernetes 배포 기록입니다.",
    tags: ["Kubernetes", "GitOps", "Argo CD", "Proxmox"],
  },
];

const routeCards: RouteCard[] = [
  {
    title: "대표 허브",
    url: "https://mint-cocoa.github.io/",
    description: "첫 진입점입니다. 서버, 클라이언트, DevOps, Runtime Demo로 갈라지는 얇은 안내 라우트입니다.",
    tone: "primary",
  },
  {
    title: "상세 문서",
    url: "https://mint-cocoa.github.io/portfolio/",
    description: "portfolio 저장소의 master:/docs를 GitHub Pages가 서빙하는 안정 문서 경로입니다.",
    tone: "stable",
  },
  {
    title: "Runtime Demo",
    url: "https://portfolio.mintcocoa.cc/",
    description: "같은 문서 산출물을 직접 만든 C++ RuntimeWeb 서버 컨테이너와 홈랩 Kubernetes 경로로 서빙합니다.",
    tone: "runtime",
  },
];

const proofPoints = [
  {
    icon: Cpu,
    title: "네트워크 런타임",
    description:
      "Linux io_uring 기반 입출력, 세션 생명주기, 버퍼 재사용, TCP proxy 실험을 문서와 코드 저장소로 추적할 수 있습니다.",
  },
  {
    icon: FileCode2,
    title: "게임 클라이언트",
    description:
      "DirectX 11 렌더링과 서버 주도 멀티플레이 흐름을 분리해 화면 출력과 네트워크 처리 책임 경계를 확인할 수 있습니다.",
  },
  {
    icon: GitBranch,
    title: "운영 파이프라인",
    description:
      "GitHub Actions, GHCR, GitOps, Argo CD, ingress-nginx까지 이어지는 배포 경로를 문서와 self-hosted URL로 검증합니다.",
  },
];

const flow = [
  ["01", "구현", "C++ 런타임, 서버 엔진, DirectX 클라이언트, 웹 앱 구현"],
  ["02", "문서화", "Quarto 기반 HTML/PDF/QMD 포트폴리오 문서 렌더링"],
  ["03", "배포", "GitHub Pages 문서와 GHCR 컨테이너 이미지 생성"],
  ["04", "운영", "Argo CD가 홈랩 Kubernetes desired state를 동기화"],
];

const repos: RepoRow[] = [
  {
    name: "iouring-runtime",
    href: "https://github.com/mint-cocoa/iouring-runtime",
    role: "최신 Runtime, RuntimeWeb, RuntimeProxy, RuntimeGame, 웹/프록시/게임 예제",
  },
  {
    name: "portfolio",
    href: "https://github.com/mint-cocoa/portfolio",
    role: "Quarto 산출물, C++ 정적 파일 서버, GHCR 이미지 배포",
  },
  {
    name: "multiplayer-dungeon-rpg-server",
    href: "https://github.com/mint-cocoa/multiplayer-dungeon-rpg-server",
    role: "dungeon_full_server로 흡수된 게임 서버 히스토리",
  },
  {
    name: "libiouring-core",
    href: "https://github.com/mint-cocoa/libiouring-core",
    role: "통합 이전 C++ io_uring 코어 런타임 히스토리",
  },
  {
    name: "libiouringweb",
    href: "https://github.com/mint-cocoa/libiouringweb",
    role: "통합 이전 C++ HTTP 웹 계층 히스토리",
  },
  {
    name: "home-k8s-gitops",
    href: "https://github.com/mint-cocoa/home-k8s-gitops",
    role: "Kubernetes desired state, Argo CD Application, Helm values",
  },
];

const publicUrls = [
  ["https://mint-cocoa.github.io/", "대표 포트폴리오 허브"],
  ["https://mint-cocoa.github.io/server.html", "서버 문서 라우팅 페이지"],
  ["https://mint-cocoa.github.io/client.html", "클라이언트 문서 라우팅 페이지"],
  ["https://mint-cocoa.github.io/devops.html", "DevOps 문서 라우팅 페이지"],
  ["https://mint-cocoa.github.io/runtime.html", "C++ RuntimeWeb 운영 데모 안내"],
  ["https://mint-cocoa.github.io/portfolio/", "안정적인 GitHub Pages 상세 문서 인덱스"],
  ["https://portfolio.mintcocoa.cc/", "직접 만든 C++ 서버와 홈랩 배포 경로 검증"],
];

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="/" aria-label="배진후 포트폴리오 홈">
          배진후
        </a>
        <nav className="nav" aria-label="주요 문서">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="github-link" href="https://github.com/mint-cocoa" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={19} />
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">C++ Runtime · Game Server · DirectX Client · Kubernetes Homelab</p>
            <h1>배진후 포트폴리오</h1>
            <p className="lead">
              C++ 런타임부터 게임 서버, DirectX 클라이언트, Kubernetes 홈랩 운영까지 직접 구현하고 배포한 과정을 정리했습니다.
            </p>
            <div className="hero-actions" aria-label="주요 이동">
              <a className="button primary" href="https://mint-cocoa.github.io/portfolio/">
                <BookOpen size={18} />
                상세 문서 인덱스
              </a>
              <a className="button" href="/server.html">
                서버
              </a>
              <a className="button" href="/client.html">
                클라이언트
              </a>
              <a className="button" href="/devops.html">
                DevOps
              </a>
              <a className="button" href="/runtime.html">
                운영 데모
              </a>
            </div>
          </div>
          <div className="hero-map" aria-label="포트폴리오 구성">
            <div className="map-node runtime">
              <Cpu size={22} />
              <span>Runtime</span>
            </div>
            <div className="map-row">
              <div className="map-node">RuntimeWeb</div>
              <div className="map-node">RuntimeProxy</div>
              <div className="map-node">RuntimeGame</div>
            </div>
            <div className="map-row compact">
              <div className="map-node">Docs</div>
              <div className="map-node">GHCR</div>
              <div className="map-node">GitOps</div>
              <div className="map-node">K8s</div>
            </div>
          </div>
        </section>

        <section className="band">
          <SectionHeader icon={Route} title="URL 라우팅 기준" />
          <div className="route-grid">
            {routeCards.map((card) => (
              <article className={`route-card ${card.tone}`} key={card.title}>
                <h3>{card.title}</h3>
                <a href={card.url}>{card.url.replace("https://", "")}</a>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band muted">
          <SectionHeader icon={Network} title="빠른 탐색" />
          <div className="feature-grid">
            {featureCards.map((card) => (
              <a className={`feature-card ${card.accent}`} href={card.href} key={card.title}>
                <card.icon size={24} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="tag-row">
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="band">
          <SectionHeader icon={ShieldCheck} title="검증 포인트" />
          <div className="proof-grid">
            {proofPoints.map((point) => (
              <article className="proof-card" key={point.title}>
                <point.icon size={22} />
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band muted">
          <SectionHeader icon={Activity} title="전체 흐름" />
          <div className="flow-grid">
            {flow.map(([num, title, description]) => (
              <article className="flow-step" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band runtime-band">
          <div>
            <SectionHeader icon={ExternalLink} title="운영 데모" />
            <h3>
              <a href="https://portfolio.mintcocoa.cc/" target="_blank" rel="noreferrer">
                Self-hosted Runtime Demo <ArrowUpRight size={17} />
              </a>
            </h3>
            <p>
              GitHub Pages와 같은 포트폴리오 문서를 직접 만든 C++ 정적 파일 서버 컨테이너로 서빙합니다.
              대표 공개 URL이 아니라, 런타임과 홈랩 배포 경로를 검증하기 위한 데모입니다.
            </p>
          </div>
          <ol className="pipeline">
            {["portfolio repo", "GitHub Actions", "Quarto render", "GHCR image push", "home-k8s-gitops tag update", "Argo CD", "Kubernetes ingress", "portfolio.mintcocoa.cc"].map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="band two-column">
          <div>
            <SectionHeader icon={Github} title="저장소" />
            <div className="table-list">
              {repos.map((repo) => (
                <a href={repo.href} key={repo.name} target="_blank" rel="noreferrer">
                  <strong>{repo.name}</strong>
                  <span>{repo.role}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader icon={BookOpen} title="공개 URL 기준" />
            <div className="table-list compact-list">
              {publicUrls.map(([url, role]) => (
                <a href={url} key={url}>
                  <strong>{url}</strong>
                  <span>{role}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 배진후</span>
        <a href="https://github.com/mint-cocoa/mint-cocoa.github.io" target="_blank" rel="noreferrer">
          소스코드 보기
        </a>
      </footer>
    </div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ size?: number }>; title: string }) {
  return (
    <div className="section-header">
      <Icon size={19} />
      <h2>{title}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
