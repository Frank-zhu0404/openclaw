# PR #151324 evidence — MiniMax-M3 commentary leak

Screenshots and live Control UI captures will be attached on the PR comment (not committed here).

Evidence source: live Control UI + MiniMax CN API (`api.minimaxi.com`). No demo HTML or generated screenshot bundle is kept in-tree.

Redacted JSON probes in this folder (optional local reference only; may also be attached on the PR comment):

- `api-default-tool.redacted.json` — MiniMax-M3 response with text before `tool_use`
- `api-tool-turn.redacted.json` — MiniMax-M3 response with thinking then `tool_use`
- `live-probe.redacted.json` — redacted live probe
- `live-tool-probe.redacted.json` — redacted forced-tool live probe (`tool_use`, status 0)

No credentials are stored in these artifacts.
