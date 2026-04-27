# Cross Repository Analysis

Date: 2026-04-27

This repository is the public React/Vite portfolio hub. The related portfolio
source, runtime, app, and operations repositories were checked out under
`_repos/` according to `REPOSITORIES.md`. The `_repos/` directory is ignored by
Git and is intended for local cross-repository review.

## Checked Out Repositories

| Local path | Latest commit inspected | Role |
|---|---:|---|
| `_repos/docs/portfolio` | `77d37fe` | Quarto/HTML portfolio documents, dashboard, and C++ static portfolio server |
| `_repos/runtime/iouring-runtime` | `6786329` | Current modular `io_uring` runtime with optional web/proxy/game modules |
| `_repos/runtime/libiouring-core` | `ff46880` | Earlier standalone ServerCore runtime extraction |
| `_repos/runtime/libiouringweb` | `14e2d05` | Earlier standalone ServerCore + ServerWeb package extraction |
| `_repos/runtime/libiouring-server` | `75b4d5e` | Larger original framework with web, storage, game examples, Docker, and K8s deploy |
| `_repos/apps/multiplayer-dungeon-rpg-server` | `9226e31` | Standalone dungeon RPG server extraction |
| `_repos/apps/game-client` | `d0e9222` | DirectX 11 isometric multiplayer game client |
| `_repos/ops/home-k8s-gitops` | `fdeac30` | Home Kubernetes GitOps deployment state |

## Architecture Reading

The portfolio is organized as a hub-and-proof system:

- `mint-cocoa.github.io` is the first-page hub.
- `portfolio` owns the detailed Quarto documents and a C++ `RuntimeWeb` static
  file server image.
- `iouring-runtime` is now the primary reusable runtime repository.
- `libiouring-core`, `libiouringweb`, `libiouring-server`, and
  `multiplayer-dungeon-rpg-server` preserve extraction history and older
  package boundaries.
- `game-client` demonstrates the Windows/DirectX client side of the same
  multiplayer dungeon RPG protocol.
- `home-k8s-gitops` pins the live portfolio image tag and exposes it through
  `portfolio.mintcocoa.cc`.

The strongest portfolio story is therefore not a single application. It is an
end-to-end system: C++ async runtime, HTTP/web serving, multiplayer backend,
Windows game client, documentation site, container build, and GitOps deployment.

## Repository Notes

### Portfolio Docs

`_repos/docs/portfolio` contains Quarto source/output, a Vite dashboard, Python
ops API code, deployment files, and a C++ static portfolio server. Its README
states that GitHub Actions builds `ghcr.io/mint-cocoa/portfolio:${GITHUB_SHA}`
and updates `home-k8s-gitops`.

### Runtime

`_repos/runtime/iouring-runtime` is the current center of gravity. It exposes a
small core runtime target and optional modules:

- `BUILD_WEB` for HTTP/static/web examples.
- `BUILD_PROXY` for TCP reverse proxy support.
- `BUILD_GAME` for multiplayer packet framing, session/player registry, and room
  dispatch.
- `BUILD_TESTS` and focused `ctest` coverage across core, web, proxy, game, job,
  ring, and observability areas.

This supersedes the older split repositories as the clearest reusable library
surface.

### Earlier Runtime Extractions

`libiouring-core` and `libiouringweb` are useful evidence of incremental
modularization. `libiouring-core` is a compact ServerCore extraction, while
`libiouringweb` layers HTTP routing, middleware, static files, SSE, WebSocket,
and reverse proxy support over that core. They are valuable for history, but the
hub should present `iouring-runtime` as the current version.

### Server and Client Apps

`multiplayer-dungeon-rpg-server` is a standalone extraction of the dungeon RPG
backend. It keeps packet handlers, room logic, persistence adapters, and
protobuf schema easy to trace.

`game-client` is a C++20/MSVC DirectX 11 client using ImGui, Winsock2/IOCP,
Protocol Buffers, Assimp, and stb. Its README documents the matching packet
format `[2B size][2B msgId][protobuf payload]`, scene flow, rendering pipeline,
and combat/chat/inventory systems.

### GitOps

`home-k8s-gitops/apps/portfolio/values.yaml` currently pins the portfolio image
to commit `77d37fe315cbe6d182a8fd62ff19eb7a8a965043`, matching the checked-out
`portfolio` repository. The chart exposes the app at `portfolio.mintcocoa.cc`
with readiness and liveness checks on `/healthz`.

## Portfolio Positioning

Recommended emphasis for the public hub:

1. Lead with `iouring-runtime` as the current reusable C++ runtime.
2. Present `RuntimeWeb`, `RuntimeProxy`, and `RuntimeGame` as optional modules
   built on one shared event/runtime substrate.
3. Show the dungeon RPG as the proof application spanning backend and DirectX
   client.
4. Use `home-k8s-gitops` as evidence that the portfolio is actually deployed,
   not only documented.
5. Treat old extractions as migration history unless a reader needs deeper
   provenance.

## Risks and Cleanup Opportunities

- Some README paths in extracted repositories still point to old absolute local
  paths. They are harmless for code review but should be normalized before using
  the text directly in public docs.
- There is duplication across `libiouring-*`, `libiouring-server`, and
  `iouring-runtime`. The hub should avoid presenting them as parallel current
  products.
- The portfolio dashboard uses React 19 while the hub uses React 18. That is
  fine for separate apps, but worth noting if code is ever merged.
- Generated Quarto assets contain large vendored JavaScript files, so searches
  should exclude generated output directories when reviewing source intent.
