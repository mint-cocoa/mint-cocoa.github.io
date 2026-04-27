import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  BookOpen,
  ExternalLink,
  Github,
  Layers3,
  MonitorPlay,
  Server,
} from "lucide-react";
import "./styles.css";

type Icon = React.ComponentType<{ size?: number; strokeWidth?: number }>;

type NavItem = {
  label: string;
  href: string;
};

type WorkItem = {
  eyebrow: string;
  title: string;
  icon: Icon;
  thumbnail?: string;
  summary: string;
  pagesUrl: string;
  mirrorUrl: string;
  repoUrl: string;
  repoName: string;
  note: string;
  tags: string[];
  group?: "server-app";
};

type ServingRoot = {
  label: string;
  href: string;
  title: string;
  detail: string;
  icon: Icon;
};

const navItems: NavItem[] = [
  { label: "Server", href: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html" },
  { label: "Client", href: "https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html" },
  { label: "DevOps", href: "https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html" },
  { label: "Ops", href: "https://mint-cocoa.github.io/portfolio/devops/OpsDashboard.html" },
];

const servingRoots: ServingRoot[] = [
  {
    label: "GitHub Pages",
    href: "https://mint-cocoa.github.io/",
    title: "대표 포트폴리오 허브 + 상세 문서",
    detail: "허브, 상세 인덱스, 서버, 클라이언트, DevOps, Ops Dashboard 문서를 공개하는 기본 경로",
    icon: BookOpen,
  },
];

const clientThumbnailUrl = "https://img.youtube.com/vi/pnr0sobe3ug/maxresdefault.jpg";

const workItems: WorkItem[] = [
  {
    eyebrow: "Portfolio Overview",
    title: "C++ 서버 런타임과 홈랩 운영 포트폴리오",
    icon: Layers3,
    summary:
      "io_uring 기반 C++ 런타임으로 정적 웹 서버, TLS 리버스 프록시, 게임 서버 계층을 만들고, DirectX 클라이언트와 홈랩 Kubernetes 운영까지 하나의 흐름으로 연결했습니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/",
    mirrorUrl: "https://portfolio.mintcocoa.cc/",
    repoUrl: "https://github.com/mint-cocoa/mint-cocoa.github.io",
    repoName: "mint-cocoa.github.io",
    note: "portfolio.mintcocoa.cc는 C++ 서버 이미지가 GitOps로 배포되어 실제 클러스터에서 서빙되는 라이브 경로입니다.",
    tags: ["C++", "DirectX", "Kubernetes", "GitOps"],
  },
  {
    eyebrow: "Server Core",
    title: "io_uring 공통 런타임",
    icon: Server,
    summary:
      "Multishot Accept/Recv, Provided Buffer Ring, 세션 수명관리, 멀티스레드 이벤트 루프를 직접 구현한 공통 C++ 서버 런타임입니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html#sec-iouring",
    mirrorUrl: "https://portfolio.mintcocoa.cc/server/ServerCorePortfolio.html#sec-iouring",
    repoUrl: "https://github.com/mint-cocoa/iouring-runtime",
    repoName: "iouring-runtime",
    note: "네트워크 엔진, 세션, 버퍼, worker loop를 다루는 공통 기반",
    tags: ["C++", "Linux", "io_uring", "Runtime"],
  },
  {
    eyebrow: "RuntimeWeb",
    title: "Web 서버 애플리케이션",
    icon: Server,
    summary:
      "HTTP 라우팅, 정적 파일 서빙, sendfile 경로, 운영용 web app 예제를 RuntimeWeb 계층으로 분리했습니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html#sec-web-apps",
    mirrorUrl: "https://portfolio.mintcocoa.cc/server/ServerCorePortfolio.html#sec-web-apps",
    repoUrl: "https://github.com/mint-cocoa/iouring-runtime",
    repoName: "iouring-runtime",
    note: "dropapp, webhook_inbox, speedtest, file_store 같은 Web 앱 실행 단위",
    tags: ["RuntimeWeb", "HTTP", "Static Files", "SendFile"],
    group: "server-app",
  },
  {
    eyebrow: "RuntimeProxy",
    title: "Proxy 서버 애플리케이션",
    icon: Server,
    summary:
      "TCP reverse proxy와 TLS/SNI 라우팅을 RuntimeProxy 계층으로 분리해 게이트웨이 성격의 서버를 검증했습니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html#sec-proxy-app",
    mirrorUrl: "https://portfolio.mintcocoa.cc/server/ServerCorePortfolio.html#sec-proxy-app",
    repoUrl: "https://github.com/mint-cocoa/iouring-runtime",
    repoName: "iouring-runtime",
    note: "업스트림 포워딩, TLS 종료, 도메인 기반 라우팅 검증",
    tags: ["RuntimeProxy", "TCP", "TLS", "SNI"],
    group: "server-app",
  },
  {
    eyebrow: "RuntimeGame",
    title: "Game 서버 애플리케이션",
    icon: Server,
    summary:
      "PacketSession, Room, RoomManager 기반 게임 서버 구조와 멀티플레이 던전 서버 예제를 RuntimeGame 위에 분리했습니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html#sec-game-app",
    mirrorUrl: "https://portfolio.mintcocoa.cc/server/ServerCorePortfolio.html#sec-game-app",
    repoUrl: "https://github.com/mint-cocoa/iouring-runtime",
    repoName: "iouring-runtime",
    note: "프로토콜, 네트워크 동기화, Zone 생명주기, 세션 라우팅",
    tags: ["RuntimeGame", "PacketSession", "Room", "Dungeon"],
    group: "server-app",
  },
  {
    eyebrow: "DevOps Document",
    title: "GitOps 기반 홈 Kubernetes 운영",
    icon: Activity,
    summary:
      "GHCR, GitOps, Argo CD, Kubernetes로 C++ 정적 파일 서버를 배포한 운영 문서입니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html",
    mirrorUrl: "https://portfolio.mintcocoa.cc/devops/DevOpsPortfolio.html",
    repoUrl: "https://github.com/mint-cocoa/home-k8s-gitops",
    repoName: "home-k8s-gitops",
    note: "홈랩 계층, 배포 흐름, workload, ingress, observability 설명",
    tags: ["Kubernetes", "GHCR", "Argo CD", "MetalLB"],
  },
  {
    eyebrow: "Client Document",
    title: "멀티플레이 던전 RPG 클라이언트",
    icon: MonitorPlay,
    thumbnail: clientThumbnailUrl,
    summary:
      "C++ DirectX 11 클라이언트의 렌더링, 네트워크, 씬 전환, 게임플레이 구조를 정리한 문서입니다.",
    pagesUrl: "https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html",
    mirrorUrl: "https://portfolio.mintcocoa.cc/client/ClientPortfolio.html",
    repoUrl: "https://github.com/mint-cocoa/game-client",
    repoName: "game-client",
    note: "GitHub Pages 문서와 self-hosted mirror를 동일 산출물로 제공",
    tags: ["C++", "DirectX 11", "Protobuf", "WinSock2"],
  },
];

const liveOpsDashboardUrl = "https://portfolio.mintcocoa.cc/devops/OpsDashboard.html";
const serverAppItems = workItems.filter((item) => item.group === "server-app");
const primaryWorkItems = workItems.filter((item) => item.group !== "server-app");

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
          <SectionTitle icon={Layers3} eyebrow="Core Projects" title="문서와 운영 mirror 경로" />
          <p className="section-intro">
            상세 문서는 `mint-cocoa.github.io/portfolio/`에서 안정적으로 공개하고, 같은 산출물을
            `portfolio.mintcocoa.cc`에서 홈랩 Kubernetes와 C++ static file server로 서빙합니다.
          </p>
          <div className="serving-root-grid" aria-label="대표 문서 서빙 경로">
            {servingRoots.map((root) => (
              <a href={root.href} key={root.href} target="_blank" rel="noreferrer">
                <p className="card-eyebrow">
                  <root.icon size={17} />
                  {root.label}
                </p>
                <strong>{root.href}</strong>
                <span>{root.title}</span>
                <small>{root.detail}</small>
              </a>
            ))}
          </div>
          <div className="work-grid">
            {primaryWorkItems.map((item) => (
              <article className={`work-card${item.thumbnail ? " has-thumbnail" : ""}`} key={item.title}>
                {item.thumbnail ? (
                  <div className="work-card-thumbnail">
                    <img src={item.thumbnail} alt="" aria-hidden="true" />
                  </div>
                ) : null}
                <div className="work-card-body">
                  <p className="card-eyebrow">
                    <item.icon size={17} />
                    {item.eyebrow}
                  </p>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <p className="route-note">{item.note}</p>
                  <div className="doc-link-row" aria-label={`${item.title} 문서 경로`}>
                    <a href={item.pagesUrl} target="_blank" rel="noreferrer">
                      GitHub Pages <ExternalLink size={15} />
                    </a>
                    <a href={item.repoUrl} target="_blank" rel="noreferrer">
                      GitHub: {item.repoName} <Github size={15} />
                    </a>
                  </div>
                  {item.title === "io_uring 공통 런타임" ? (
                    <div className="server-app-grid" aria-label="서버 예제 애플리케이션 문서">
                      {serverAppItems.map((app) => (
                        <article className="server-app-card" key={app.title}>
                          <p className="card-eyebrow">
                            <app.icon size={17} />
                            {app.eyebrow}
                          </p>
                          <h3>{app.title}</h3>
                          <p>{app.summary}</p>
                          <p className="route-note">{app.note}</p>
                          <div className="doc-link-row compact" aria-label={`${app.title} 문서 경로`}>
                            <a href={app.pagesUrl} target="_blank" rel="noreferrer">
                              Pages <ExternalLink size={15} />
                            </a>
                            <a href={app.repoUrl} target="_blank" rel="noreferrer">
                              GitHub <Github size={15} />
                            </a>
                          </div>
                          <div className="tag-row">
                            {app.tags.map((tag) => (
                              <span key={tag}>{tag}</span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : null}
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
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
