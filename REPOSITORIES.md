# Related repositories

This GitHub Pages repository is the public portfolio hub. Related source,
document, runtime, and operations repositories can be checked out locally under
`_repos/` for cross-repository editing and review.

## Local checkout layout

```text
_repos/
  docs/
    portfolio/
  runtime/
    iouring-runtime/
    libiouring-core/
    libiouringweb/
    libiouring-server/
  apps/
    multiplayer-dungeon-rpg-server/
    game-client/
  ops/
    home-k8s-gitops/
```

## Repository map

| Local path | Repository | Role |
|---|---|---|
| `_repos/docs/portfolio` | `mint-cocoa/portfolio` | Quarto portfolio documents and runtime demo image |
| `_repos/runtime/iouring-runtime` | `mint-cocoa/iouring-runtime` | Current reusable `io_uring` runtime, web, and proxy modules |
| `_repos/runtime/libiouring-core` | `mint-cocoa/libiouring-core` | ServerCore networking/runtime library referenced by the server document |
| `_repos/runtime/libiouringweb` | `mint-cocoa/libiouringweb` | HTTP/web layer referenced by the server/runtime documents |
| `_repos/runtime/libiouring-server` | `mint-cocoa/libiouring-server` | Game server framework with PostgreSQL worker pool |
| `_repos/apps/multiplayer-dungeon-rpg-server` | `mint-cocoa/multiplayer-dungeon-rpg-server` | Demo multiplayer dungeon RPG server |
| `_repos/apps/game-client` | `mint-cocoa/game-client` | DirectX 11 isometric game client |
| `_repos/ops/home-k8s-gitops` | `mint-cocoa/home-k8s-gitops` | Home Kubernetes desired state and Argo CD applications |

## Published portfolio document paths

| Document | Source checkout | Published file |
|---|---|---|
| Server portfolio | `_repos/docs/portfolio` | `docs/server/ServerCorePortfolio.html` |
| Client portfolio | `_repos/docs/portfolio` | `docs/client/ClientPortfolio.html` |
| DevOps portfolio | `_repos/docs/portfolio` | `docs/devops/DevOpsPortfolio.qmd` and `docs/devops/DevOpsPortfolio.html` |

The current repository (`mint-cocoa.github.io`) remains the public hub and is
not duplicated under `_repos/`.
