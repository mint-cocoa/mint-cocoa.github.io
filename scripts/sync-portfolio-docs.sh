#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_dir="${PORTFOLIO_DOCS_SOURCE:-$repo_root/_repos/docs/portfolio/docs}"
target_dir="${PORTFOLIO_DOCS_TARGET:-$repo_root/_site/portfolio}"

if [[ ! -d "$source_dir" ]]; then
  echo "Portfolio docs source not found: $source_dir" >&2
  echo "Set PORTFOLIO_DOCS_SOURCE=/path/to/portfolio/docs for local testing." >&2
  exit 1
fi

if [[ ! -f "$source_dir/index.html" ]]; then
  echo "Portfolio docs source is missing index.html: $source_dir" >&2
  exit 1
fi

rm -rf "$target_dir"
mkdir -p "$target_dir"
cp -a "$source_dir"/. "$target_dir"/

echo "Synced portfolio docs:"
echo "  source: $source_dir"
echo "  target: $target_dir"
