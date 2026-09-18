# Same-session Control UI screenshots

- Session ID: `99b84e08-d379-44e7-bc6e-1472cc7fedb6`
- Session key: `agent:main:dashboard:1666c077-276c-46a7-bcca-2f0ca31c2cb8`
- Provider/model: MiniMax / `MiniMax-M3`
- Control UI: `http://127.0.0.1:18789/chat/main/run-sleep-and-date-command-1666c077`
- Live run: `5a9423a5-57df-4a4a-86d5-f0d3b9bd2baf`

## Captures

- `proof-stream-filtered.png` — MD5 `242ce1a6fdaaf3a28d9fb0c3bab4fd6c` — live tool run with visible provider-keyed TEXT progress (`msg_progress_live_151324`), active tool, and no generated commentary bubble.
- `proof-after-complete.png` — MD5 `b19709f9d5ea1d58b26d93d7b5e4d212` — completed same-session state with durable provider-keyed text (`msg_progress_151324`) visible.
- `proof-after-reload.png` — MD5 `405655564913c833bf4c0c29b12fe61b` — hard reload of the same session; durable provider-keyed text remains visible.

All three PNGs have distinct MD5s. The screenshots are real Control UI captures. Provider-keyed text was injected through the local evidence harness and is visibly labeled as such; MiniMax model output and commentary emission remain live.

## Post-reload checks

- Emitted commentary string present: `false`
- Durable provider-keyed progress string present: `true`
- Commentary transcript: `transcript-commentary-emitted-99b84e08.redacted.json`
- Provider transcript: `transcript-provider-progress-99b84e08.redacted.json`
- UI projection: `transcript-ui-visible-99b84e08.redacted.json`

Complete: both requested claims are proven with no remaining gap.
