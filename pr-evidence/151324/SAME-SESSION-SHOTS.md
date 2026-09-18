# Same-session Control UI screenshots

- Session ID: `99b84e08-d379-44e7-bc6e-1472cc7fedb6`
- Model: MiniMax-M3 via minimax
- Session URL: `http://127.0.0.1:18789/chat/main/run-sleep-and-date-command-1666c077`
- `proof-stream-filtered.png` — MD5 `46341c175bbe7bfa9124a1c64eef2865` — captured after hard reload while `sleep 18; date -u` was still active; no commentary bubble, active tool chip visible.
- `proof-after-complete.png` — MD5 `a4e2608482abfb7c8bd6c4ced983afe9` — final result retained, commentary absent.
- `proof-after-reload.png` — MD5 `c13c46451cb71fade4bbf16961e7fec9` — hard reload of the same session after completion; result retained, commentary absent.
- All three PNGs have distinct MD5s.
- Page-text check after reload: commentary string absent (`false`).
- Transcript pair: `transcript-commentary-emitted-99b84e08.redacted.json` and `transcript-ui-visible-99b84e08.redacted.json`.
- Remaining gap: no separate provider-keyed TEXT progress appeared beyond the tool activity chip.
