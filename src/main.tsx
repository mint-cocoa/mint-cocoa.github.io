import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ExternalLink,
  Github,
  Layers3,
  MonitorPlay,
  Server,
} from "lucide-react";
import "./styles.css";

type Icon = React.ComponentType<{ size?: number; strokeWidth?: number }>;

type WorkItem = {
  eyebrow: string;
  title: string;
  icon: Icon;
  thumbnail?: string;
  summary: string;
  detailUrl: string;
  repoUrl?: string;
  repoName?: string;
  note: string;
  tags: string[];
  extraLinks?: {
    label: string;
    href: string;
    icon: Icon;
  }[];
  group?: "server-app";
};

const clientThumbnailUrl = "https://img.youtube.com/vi/pnr0sobe3ug/maxresdefault.jpg";
const liveOpsDashboardUrl = "/portfolio/devops/OpsDashboard.html";

const workItems: WorkItem[] = [
  {
    eyebrow: "Server Core",
    title: "io_uring 공통 런타임",
    icon: Server,
    summary:
      "Multishot Accept/Recv, Provided Buffer Ring, 세션 수명관리, 멀티스레드 이벤트 루프를 직접 구현한 공통 C++ 서버 런타임입니다.",
    detailUrl: "/portfolio/server/ServerCorePortfolio.html#sec-iouring",
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
    detailUrl: "/portfolio/server/ServerCorePortfolio.html#sec-web-apps",
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
    detailUrl: "/portfolio/server/ServerCorePortfolio.html#sec-proxy-app",
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
    detailUrl: "/portfolio/server/ServerCorePortfolio.html#sec-game-app",
    repoUrl: "https://github.com/mint-cocoa/iouring-runtime",
    repoName: "iouring-runtime",
    note: "프로토콜, 네트워크 동기화, Zone 생명주기, 세션 라우팅",
    tags: ["RuntimeGame", "PacketSession", "Room", "Dungeon"],
    group: "server-app",
  },
  {
    eyebrow: "DevOps / Live Ops",
    title: "홈랩 DevOps 운영과 Ops Dashboard",
    icon: Activity,
    summary:
      "C++ 웹 런타임으로 만든 앱을 GitOps, Argo CD, Kubernetes로 배포하고 Ops API 기반 라이브 대시보드까지 연결했습니다.",
    detailUrl: "/portfolio/devops/DevOpsPortfolio.html",
    note: "홈랩 계층, 배포 흐름, workload, ingress, observability와 실시간 운영 상태 확인 경로를 함께 제공합니다.",
    tags: ["Kubernetes", "Argo CD", "Ops API", "Prometheus", "Proxmox"],
    extraLinks: [
      {
        label: "Ops Dashboard",
        href: liveOpsDashboardUrl,
        icon: Activity,
      },
    ],
  },
  {
    eyebrow: "Client Document",
    title: "멀티플레이 던전 RPG 클라이언트",
    icon: MonitorPlay,
    thumbnail: clientThumbnailUrl,
    summary:
      "C++ DirectX 11 클라이언트의 렌더링, 네트워크, 씬 전환, 게임플레이 구조를 정리한 문서입니다.",
    detailUrl: "/portfolio/client/ClientPortfolio.html",
    repoUrl: "https://github.com/mint-cocoa/game-client",
    repoName: "game-client",
    note: "상세 문서는 현재 호스트의 /portfolio 하위 경로를 기준으로 제공합니다.",
    tags: ["C++", "DirectX 11", "Protobuf", "WinSock2"],
  },
];

const serverAppItems = workItems.filter((item) => item.group === "server-app");
const primaryWorkItems = workItems.filter((item) => item.group !== "server-app");

function App() {
  return (
    <div className="app-shell">
      <main>
        <section className="section projects-section">
          <div className="section-title project-title">
            <p>
              <Layers3 size={17} />
              Core Projects
            </p>
            <h1>주요 프로젝트</h1>
          </div>
          <div className="project-intro">
            <p className="section-lead">
              io_uring 기반 C++ 런타임으로 정적 웹 서버, TLS 리버스 프록시, 게임 서버 계층을
              만들고, DirectX 클라이언트와 홈랩 Kubernetes 운영까지 하나의 흐름으로 연결했습니다.
            </p>
            <div className="project-intro-facts" aria-label="문서 공개 경로">
              <span>C++ Server</span>
              <span>DirectX Client</span>
              <span>K8s DevOps</span>
              <a href="/portfolio/" target="_blank" rel="noreferrer">
                /portfolio/ 문서 <ExternalLink size={15} />
              </a>
            </div>
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
                    <a href={item.detailUrl} target="_blank" rel="noreferrer">
                      상세 문서 <ExternalLink size={15} />
                    </a>
                    {item.repoUrl && item.repoName ? (
                      <a href={item.repoUrl} target="_blank" rel="noreferrer">
                        GitHub: {item.repoName} <Github size={15} />
                      </a>
                    ) : null}
                    {item.extraLinks?.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label} <link.icon size={15} />
                      </a>
                    ))}
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
                            <a href={app.detailUrl} target="_blank" rel="noreferrer">
                              Docs <ExternalLink size={15} />
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

createRoot(document.getElementById("root")!).render(<App />);
