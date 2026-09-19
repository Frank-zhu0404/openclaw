# PR #151324 — same-session Control UI proof (Rev 18 @ 4dfb38c)

## Same Control UI session

- Head: `4dfb38c98d0b94a584532960461439e194c7764e`
- Session ID: `1b4c5530-dd00-4d83-bbb1-d2006637157f`
- Session key: `agent:main:dashboard:c7b483e6-0d48-4ebc-9f38-3849f9f24248`
- Provider/model: MiniMax / `MiniMax-M3` (thinking=adaptive)
- Control UI URL: `/chat/main/sleep-progress-update-c7b483e6`
- MiniMax producer IDs confirmed in Gateway `chat.history` before screenshots:
  - `minimax-commentary-0-78ef2a3e6f3143fda5717bd8`
  - `minimax-commentary-0-7bef99126979429cb2b5f094`
- Invitation card: dismissed before screenshots

## Served Control UI asset identity

- `data-openclaw-control-ui-build-id`: `2026.9.4-4dfb38c98d0b-2026-09-19T03-23-00.270Z-a616a55da894b94882443a039a2695f1fb8f94af1cba04c69bf81f3d889398d6`
- JS asset (startup): `/assets/index-DsBQuSuR.js` (also ships `control-ui-core-*.js` under `dist/control-ui/assets/`)
- Gateway: `http://127.0.0.1:18789/` (cwd `/workspace/pr-work/openclaw`, `OPENCLAW_STATE_DIR=/home/box/.openclaw-pr151324`)

## Claims (what this capture actually shows)

1. **MiniMax emitted** `minimax-commentary-*` with `phase=commentary` in this session (see redacted transcript). Gateway projection keeps those fallbacks **phased** (`textSignature` retained); `extractText` / `extractAssistantPhaseText` returns `null` for them.
2. **Ordinary** `commentary-0-a5b7154a17b606281c6c533d` and **provider** `msg_progress_151324_163457f5` **entered WITH `phase=commentary`** (textSignature JSON includes `phase: "commentary"`), then went through **real Gateway `chat.history` projection** (`includeCommentaryFallbacks: true` / `projectChatDisplayMessages`). After projection they are **unphased readable progress with the same itemId** (`extractText` returns the harness text; no `textSignature` on projected content).
3. **Identities match** across mid-turn history verify → after-complete → after hard reload (`chat.history` itemIds unchanged).
4. **UI screenshots**: ordinary + provider harness text is **visible** in stream / after-complete / after-reload captures (tool activity expanded so retained progress rows are on screen). Distinct MD5s.
5. No `phase=progress` (Rev 13 rejected shape).

## Screenshots

| Screenshot                  | MD5                                | State                                                                |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------- |
| `proof-stream-filtered.png` | `c0435ca2d118f3160da69c044bcc736e` | Mid-turn after Gateway history projection; ordinary+provider visible |
| `proof-after-complete.png`  | `9b6967312c874c5b34b890740ec90802` | After tool completion; ordinary+provider visible; UTC final retained |
| `proof-after-reload.png`    | `32e061e135db1ae05f0def1a72b89d62` | Hard reload; same item ids; ordinary+provider still visible          |

All three MD5s are distinct.

## Honesty

- MiniMax does not natively emit ordinary `commentary-*` or OpenAI-style `msg_*` ids. Those two rows are a **labeled local evidence harness** that appends assistant content blocks **with `phase=commentary`**, then relies on the **same Gateway `projectChatDisplayMessages({ includeCommentaryFallbacks: true })` path** used by `chat.history` (not an unphased post-completion SQLite-only inject). UI text is explicitly labeled `[Evidence harness · … · phase=commentary]`.
- Injection happened **during the live MiniMax tool turn** (while `sleep 30` was active), then Control UI was reloaded so history came through Gateway projection/broadcast reload — not a post-final-only bypass.
- MiniMax live narration strings can still appear as expanded tool-transcript lines in this UI; the **projection contract** under review is that MiniMax ids stay **phase-tagged** (`extractText === null`) while ordinary/provider become **unphased readable** with stable `openclawStreamFallback.itemId`. Redacted `chat.history` evidence records that contract.

## Redacted JSON

- `transcript-commentary-emitted-1b4c5530.redacted.json`
- `transcript-provider-progress-1b4c5530.redacted.json`
- `transcript-ui-visible-1b4c5530.redacted.json`
