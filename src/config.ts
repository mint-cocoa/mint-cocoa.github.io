export const siteConfig = {
  name: "배진후",
  title: "C++ 서버 / 클라이언트 / 홈랩 DevOps 포트폴리오",
  description:
    "io_uring 기반 C++ 서버 런타임, DirectX 클라이언트, 홈랩 Kubernetes 배포 과정을 정리한 포트폴리오 허브입니다.",
  accentColor: "#2563eb",
  social: {
    github: "https://github.com/mint-cocoa",
  },
  aboutMe:
    "이 사이트는 게임 서버와 클라이언트 구현 문서, 그리고 직접 만든 C++ 런타임을 홈랩 Kubernetes 환경까지 배포한 과정을 한 곳에서 볼 수 있도록 정리한 허브입니다. 안정적으로 공개할 문서는 GitHub Pages에 두고, portfolio.mintcocoa.cc는 같은 문서를 직접 만든 C++ 정적 파일 서버와 GitOps 배포 경로로 운영하는 실험 환경으로 분리했습니다.",
  skills: [
    "C++20/23",
    "io_uring",
    "Linux networking",
    "Game Server",
    "DirectX 11",
    "Docker",
    "Kubernetes",
    "Argo CD",
    "GitHub Actions",
    "Proxmox",
  ],
  projects: [
    {
      name: "서버 구현 포트폴리오",
      description:
        "Linux 환경에서 io_uring을 직접 활용해 네트워크 엔진을 구현하고, 세션 관리, 버퍼 관리, Room 스케줄링, 비동기 DB 계층, 벤치마크까지 정리한 서버 포트폴리오입니다.",
      link: "https://mint-cocoa.github.io/portfolio/server/ServerCorePortfolio.html",
      skills: ["C++", "io_uring", "Linux", "Game Server"],
    },
    {
      name: "클라이언트 구현 포트폴리오",
      description:
        "DirectX 11 API로 제작한 멀티플레이 던전 RPG 클라이언트입니다. 렌더링 파이프라인, 씬 전환, 패킷 처리, 서버 주도 흐름 제어를 직접 구현한 과정을 정리했습니다.",
      link: "https://mint-cocoa.github.io/portfolio/client/ClientPortfolio.html",
      skills: ["C++", "DirectX 11", "Networking", "RPG Client"],
    },
    {
      name: "홈랩 DevOps 포트폴리오",
      description:
        "Proxmox VM 위에 Kubernetes 클러스터를 구성하고, GitHub Actions, GHCR, GitOps, Argo CD, MetalLB, ingress-nginx로 애플리케이션을 배포한 운영 포트폴리오입니다.",
      link: "https://mint-cocoa.github.io/portfolio/devops/DevOpsPortfolio.html",
      skills: ["Kubernetes", "GitOps", "Argo CD", "Proxmox"],
    },
    {
      name: "Self-hosted Runtime Demo",
      description:
        "GitHub Pages와 같은 포트폴리오 문서를 직접 만든 C++ 정적 파일 서버 컨테이너로 서빙합니다. 대표 공개 URL이 아니라, 런타임과 홈랩 배포 경로를 검증하기 위한 데모입니다.",
      link: "https://portfolio.mintcocoa.cc/",
      skills: ["C++ runtime", "GHCR", "Ingress", "MetalLB"],
    },
    {
      name: "home-k8s-gitops",
      description:
        "홈랩 클러스터의 원하는 상태를 관리하는 GitOps 저장소입니다. 포트폴리오 앱, ingress, MetalLB, NFS dynamic provisioner, Prometheus, Grafana 구성을 Argo CD가 이 저장소 기준으로 동기화합니다.",
      link: "https://github.com/mint-cocoa/home-k8s-gitops",
      skills: ["GitOps", "Helm", "Argo CD", "Kubernetes"],
    },
  ],
  experience: [
    {
      company: "홈랩 플랫폼",
      title: "Proxmox 기반 Kubernetes 운영 환경",
      dateRange: "2026",
      bullets: [
        "Raspberry Pi/Odroid 관리 노드, Mini PC edge proxy, Proxmox VM 클러스터, OMV/NFS 스토리지로 역할을 분리했습니다.",
        "GitHub Actions가 이미지를 GHCR에 푸시하고 GitOps 저장소의 image tag를 갱신하면, Argo CD가 클러스터 상태를 자동으로 맞추는 구조로 구성했습니다.",
        "외부 트래픽은 Mini PC edge proxy에서 받고, Kubernetes 내부에서는 MetalLB와 ingress-nginx로 서비스별 라우팅을 처리했습니다.",
      ],
    },
    {
      company: "C++ io_uring 런타임",
      title: "HTTP 앱 표면과 프록시 실험",
      dateRange: "2026",
      bullets: [
        "단순 TCP 서버가 아니라 HTTP 라우팅, 정적 파일 서빙, upload API, JSON 응답, health check를 갖춘 웹 앱 표면을 구현했습니다.",
        "dropapp, webhook-inbox, portfolio_site를 컨테이너 이미지로 만들고 실제 도메인과 Kubernetes ingress 뒤에서 동작하도록 배포했습니다.",
      ],
    },
  ],
  education: [],
};
