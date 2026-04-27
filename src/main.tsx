import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Boxes,
  ExternalLink,
  Github,
  Layers3,
  MonitorPlay,
  Server,
  ShieldCheck,
} from "lucide-react";
import argoTreeImage from "./assets/argocd-portfolio-tree.png";
import clientArchitectureImage from "./assets/client-architecture.png";
import serverRuntimeImage from "./assets/server-runtime-layers.png";
import "./styles.css";

type Icon = React.ComponentType<{ size?: number; strokeWidth?: number }>;

type NavItem = {
  label: string;
  href: string;
};

type WorkItem = {
  eyebrow: string;
  title: string;
  href: string;
  icon: Icon;
  image: string;
  summary: string;
  metrics: string[];
  tags: string[];
};

type RepoItem = {
  name: string;
  href: string;
  role: string;
};

const navItems: NavItem[] = [
  { label: "Server", href: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html" },
  { label: "Client", href: "https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html" },
  { label: "DevOps", href: "https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html" },
  { label: "Ops", href: "https://mint-cocoa.github.io/portfolio/devops/OpsDashboard.html" },
];

const workItems: WorkItem[] = [
  {
    eyebrow: "C++ Server Runtime",
    title: "io_uring 기반 서버 런타임",
    href: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html",
    icon: Server,
    image: serverRuntimeImage,
    summary:
      "공통 Runtime 위에 RuntimeWeb, RuntimeProxy, RuntimeGame을 분리하고 HTTP 앱, TCP reverse proxy, 던전 게임 서버 예제로 검증했습니다.",
    metrics: ["Multishot Accept/Recv", "Provided Buffer", "24 runtime tests"],
    tags: ["C++", "Linux", "io_uring", "RuntimeWeb"],
  },
  {
    eyebrow: "DirectX Game Client",
    title: "멀티플레이 던전 RPG 클라이언트",
    href: "https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html",
    icon: MonitorPlay,
    image: clientArchitectureImage,
    summary:
      "DirectX 11 렌더링, 씬 전환, Protobuf 패킷 프레이밍, WinSock2 네트워크 루프를 직접 구현한 C++ 게임 클라이언트입니다.",
    metrics: ["29 OBJ assets", "59 protobuf messages", "Scene-driven flow"],
    tags: ["C++", "DirectX 11", "Protobuf", "WinSock2"],
  },
  {
    eyebrow: "Homelab Platform",
    title: "GitOps 기반 홈 Kubernetes 운영",
    href: "https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html",
    icon: Boxes,
    image: argoTreeImage,
    summary:
      "GitHub Actions, GHCR, GitOps, Argo CD, MetalLB, ingress-nginx를 연결해 C++ 정적 파일 서버를 개인 도메인에 배포했습니다.",
    metrics: ["3 control-plane", "2 workers", "Argo CD synced"],
    tags: ["Kubernetes", "GHCR", "Argo CD", "MetalLB"],
  },
];

const repositories: RepoItem[] = [
  {
    name: "iouring-runtime",
    href: "https://github.com/mint-cocoa/iouring-runtime",
    role: "Runtime, RuntimeWeb, RuntimeProxy, RuntimeGame, web/proxy/game examples",
  },
  {
    name: "portfolio",
    href: "https://github.com/mint-cocoa/portfolio",
    role: "Quarto 문서, C++ 정적 파일 서버, GHCR 이미지 배포",
  },
  {
    name: "game-client",
    href: "https://github.com/mint-cocoa/game-client",
    role: "DirectX 11 멀티플레이 던전 RPG 클라이언트",
  },
  {
    name: "home-k8s-gitops",
    href: "https://github.com/mint-cocoa/home-k8s-gitops",
    role: "Kubernetes desired state와 Argo CD Application 구성",
  },
];

const liveOpsDashboardUrl = "https://portfolio.mintcocoa.cc/devops/OpsDashboard.html";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="배진후 포트폴리오 홈">
          <span>JH</span>
          배진후
        </a>
        <nav aria-label="상세 포트폴리오">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="icon-link" href="https://github.com/mint-cocoa" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={19} />
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">C++ Server · DirectX Client · K8s DevOps</p>
            <h1>C++ 서버 런타임과 홈랩 운영 포트폴리오</h1>
            <p className="lead">
              io_uring 기반 C++ 런타임으로 정적 웹 서버, TLS 리버스 프록시, 게임 서버 계층을
              만들고, DirectX 클라이언트와 홈랩 Kubernetes 운영까지 하나의 흐름으로 연결했습니다.
              `portfolio.mintcocoa.cc`는 C++ 서버 이미지가 GitOps로 배포되어 실제 클러스터에서
              서빙되는 라이브 경로입니다.
            </p>
            <div className="hero-actions" aria-label="주요 링크">
              <a className="button primary" href="https://mint-cocoa.github.io/portfolio/">
                <BookOpen size={18} />
                포트폴리오 상세 문서
              </a>
              <a className="button" href="https://portfolio.mintcocoa.cc/" target="_blank" rel="noreferrer">
                <Activity size={18} />
                운영 데모 (Live)
              </a>
            </div>
          </div>

          <figure className="hero-visual">
            <div className="hero-embed">
              <iframe
                src={liveOpsDashboardUrl}
                title="portfolio.mintcocoa.cc OpsDashboard live path"
                loading="lazy"
                scrolling="no"
              />
              <a
                className="hero-embed-link"
                href={liveOpsDashboardUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="OpsDashboard 라이브 페이지 열기"
              />
            </div>
            <figcaption>
              <span className="status-dot" />
              portfolio.mintcocoa.cc/devops/OpsDashboard.html live path
            </figcaption>
          </figure>
        </section>

        <section className="section">
          <SectionTitle icon={Layers3} eyebrow="Core Projects" title="주요 개발 프로젝트" />
          <div className="work-grid">
            {workItems.map((item) => (
              <a className="work-card" href={item.href} key={item.title}>
                <div className="work-card-img">
                  <img src={item.image} alt="" aria-hidden="true" />
                </div>
                <div className="work-card-body">
                  <p className="card-eyebrow">
                    <item.icon size={17} />
                    {item.eyebrow}
                  </p>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <ul className="metric-list">
                    {item.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="card-link">
                    상세 구현 보기 <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section repo-section">
          <SectionTitle icon={ShieldCheck} eyebrow="Source Repositories" title="코드 및 문서 저장소" />
          <div className="repo-list">
            {repositories.map((repo) => (
              <a href={repo.href} key={repo.name} target="_blank" rel="noreferrer">
                <strong>{repo.name}</strong>
                <span>{repo.role}</span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 배진후</span>
        <a href="https://github.com/mint-cocoa/mint-cocoa.github.io" target="_blank" rel="noreferrer">
          mint-cocoa.github.io
        </a>
      </footer>
    </div>
  );
}

function SectionTitle({ icon: IconComponent, eyebrow, title }: { icon: Icon; eyebrow: string; title: string }) {
  return (
    <div className="section-title">
      <p>
        <IconComponent size={17} />
        {eyebrow}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
