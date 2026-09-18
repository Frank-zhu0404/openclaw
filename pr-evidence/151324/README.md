# PR #151324 live Control UI evidence (MiniMax-M3)

Captured from a real local Gateway Control UI session on this branch
(`http://127.0.0.1:18789/`) using **MiniMax-M3** via the CN API. No secrets.

| File                       | What it shows                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `live-stream-progress.png` | Mid-run: real tool progress (`sleep 12; date -u`) visible; pre-tool commentary not shown as assistant text  |
| `live-after-complete.png`  | After completion: tool progress retained + final UTC answer; commentary still absent                        |
| `live-after-reload.png`    | After hard browser reload of the same chat: progress + final still present (distinct capture from complete) |

Redacted API JSON probes remain for provider shape. Demo HTML was removed earlier.
