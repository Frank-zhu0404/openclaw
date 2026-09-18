# PR #151324 — P1 MiniMax commentary-filter proof (reshoot @ 68d3b50)

## Same Control UI session

- Head: `68d3b50d83fe71839523e1595bba58f8de738ca2`
- Session ID: `ab7f1c43-4d6e-443b-abc8-78b99966d82e`
- Session key: `agent:main:dashboard:5064bfc6-bf6d-4059-b33c-6a31ec69cadc`
- Provider/model: MiniMax / `MiniMax-M3`
- Control UI URL: `/chat/main/i-can-t-run-shell-commands-or-execute-scripts-i-5064bfc6`
- P1 producer IDs confirmed before screenshots: `minimax-commentary-0-c8d1aa357f45447d873c0fda`, `minimax-commentary-0-8048c9f047714a4b937b4f1d`

## Served Control UI asset identity

Rebuilt and served from this head at capture time:

- `data-openclaw-control-ui-build-id`: `2026.9.4-68d3b50d83fe-2026-09-18T10-26-54.364Z-a616a55da894b94882443a039a2695f1fb8f94af1cba04c69bf81f3d889398d6`
- Primary JS asset: `/assets/index-BWVKqDuX.js`
- Gateway: `http://127.0.0.1:18789/` (cwd `/workspace/pr-work/openclaw`)

## Evidence

Gateway was restarted from the current checkout; build completed; MiniMax emitted `minimax-commentary-*` IDs with `phase=commentary` before capture. Generated commentary narration was absent from the in-flight, completed, and hard-reloaded UI screenshots. Final UTC tool output remained visible after completion and hard reload.

| Screenshot                  | MD5                                | State                                                                     |
| --------------------------- | ---------------------------------- | ------------------------------------------------------------------------- |
| `proof-stream-filtered.png` | `46b4b9db28ced129d71826f76df306fc` | Fresh in-flight tool run; no generated commentary sentence visible        |
| `proof-after-complete.png`  | `118fd36941f2f8aa8160ce26c7a664e5` | Completed run; final UTC output retained; generated commentary absent     |
| `proof-after-reload.png`    | `350825d619aa35ebc20530b1c271c3f0` | Fresh hard reload; final UTC output retained; generated commentary absent |

All three MD5s are distinct and the stream hash is not either prior rejected hash.

## Ordinary / provider-keyed commentary retention

ClawSweeper Rev 13 rejected unsupported `phase=progress` harness injections as non-covering for commentary projection/retention. Ordinary generated `commentary-*` retention is covered by unit tests on this head (history projection, stream materialization, task-activity consumer). Live UI retention of ordinary/provider-keyed commentary through completion and reload is requested via `@openclaw-mantis` using the exact verify prompt from Rev 13.

Redacted session JSON:

- `transcript-commentary-emitted-ab7f1c43.redacted.json`
- `transcript-provider-progress-ab7f1c43.redacted.json` (SQLite-only harness row; not claimed as UI proof)
- `transcript-ui-visible-ab7f1c43.redacted.json`
