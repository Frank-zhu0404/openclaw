# PR #151324 evidence — MiniMax-M3 commentary leak

These redacted artifacts are ready to attach to PR #151324.

- `before-or-leak.png` — minimal local chat demo showing ordinary pre-tool narration rendered as visible assistant text before the tool call (the leak pattern).
- `after-fixed.png` — minimal local chat demo showing the intended projection: legitimate tool progress plus the final answer, with commentary hidden.
- `progress-retained.png` — reload-state demo showing legitimate tool progress retained alongside the final answer while pre-tool narration remains hidden.
- `provider-shape-terminal.png` — redacted terminal screenshot of `show-provider-shape.py`; it prints the provider block order `text (ordinary text before tool_use)`, then `tool_use`, and the intended projection.
- `api-default-tool.redacted.json` — already-captured redacted MiniMax-M3 response containing text before `tool_use`.
- `api-tool-turn.redacted.json` — already-captured redacted MiniMax-M3 response containing thinking followed by `tool_use`.
- `live-probe.redacted.json` — redacted live probe response.
- `live-tool-probe.redacted.json` — redacted forced-tool live probe; provider returned `tool_use` with status 0.
- `demo.html` and `show-provider-shape.py` — reproducible local demo/evidence source; neither contains credentials.

The live probe used MiniMax-M3 via `https://api.minimaxi.com` with the validated environment key. The key was sourced only in-process and is not present in these artifacts, screenshots, or this README.

The full OpenClaw gateway/UI was not started: this checkout has no built `dist/entry.js`, and the available Node runtime is 20.19.2 while this checkout requires Node 24.16+ or 26.1+. Therefore the screenshots use the requested minimal local demo fallback.
