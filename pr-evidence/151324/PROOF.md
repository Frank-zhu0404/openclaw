# PR #151324 — same-session Control UI proof (Rev 17 reshoot @ 6afa78e)

## Same Control UI session

- Head: `6afa78e48908cd028604543904ade0ac72b4e0c9`
- Session ID: `61f91ffd-be89-4e2b-a421-fb92b2075ef9`
- Session key: `agent:main:dashboard:0c5acb95-31e0-42c3-ac08-b8705a2b9d2c`
- Provider/model: MiniMax / `MiniMax-M3` (thinking=adaptive)
- Control UI URL: `/chat/main/progress-update-sleep-command-0c5acb95`
- MiniMax producer ID confirmed in `chat.history`: `minimax-commentary-0-d1df4424eb9b4f1784c66e51`
- Invitation card: dismissed before screenshots

## Served Control UI asset identity

- `data-openclaw-control-ui-build-id`: `2026.9.4-6afa78e48908-2026-09-19T01-59-17.777Z-a616a55da894b94882443a039a2695f1fb8f94af1cba04c69bf81f3d889398d6`
- Gateway: `http://127.0.0.1:18789/` (cwd `/workspace/pr-work/openclaw`, `OPENCLAW_STATE_DIR=/home/box/.openclaw-pr151324`)

## Claims

1. MiniMax emitted `minimax-commentary-*` with `phase=commentary` (see redacted transcript).
2. That narration is **absent** from Control UI after the tool turn and after hard reload.
3. Unphased ordinary generated `commentary-*` and provider-keyed `msg_*` rows remain **readable** in the same session after completion and hard reload (same item ids in transcript + UI text).
4. No `phase=progress` (ClawSweeper Rev 13 rejected that shape).

## Screenshots

| Screenshot                  | MD5                                | State                                                                          |
| --------------------------- | ---------------------------------- | ------------------------------------------------------------------------------ |
| `proof-stream-filtered.png` | `2e74fc779aa77ec967c989ff8a8100a0` | Turn framing; MiniMax narration absent                                         |
| `proof-after-complete.png`  | `eacd9c30539e63c890f35e70df168221` | Ordinary + provider harness text visible                                       |
| `proof-after-reload.png`    | `456d78738bf9156d93754bfb57ab2627` | Hard reload; ordinary + provider still visible; MiniMax narration still absent |

All three MD5s are distinct.

## Honesty

MiniMax does not natively emit ordinary `commentary-*` or OpenAI-style `msg_*` ids. Those two readable rows were added via a **labeled local evidence harness** (`gateway-injected`) into the real Control UI/gateway session after the MiniMax tool turn, using **unphased** textSignatures (id only — not `phase=progress`, and not `phase=commentary` on the ordinary id so history does not wrap it as activity-only fallback). UI text is explicitly labeled `[Evidence harness · …]`. MiniMax commentary emission/filtering and the shell/final turn are live.

## Redacted JSON

- `transcript-commentary-emitted-61f91ffd.redacted.json`
- `transcript-provider-progress-61f91ffd.redacted.json`
- `transcript-ui-visible-61f91ffd.redacted.json`
