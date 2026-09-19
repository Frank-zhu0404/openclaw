# PR #151324 — Rev 19 Control UI proof (collapsed vs expanded)

## Claim (Rev 19 blocker)

MiniMax pre-tool narration is **absent from the NORMAL reply area** (activity/tool details collapsed).
It is **only visible after expanding** the tool/activity details disclosure.
Ordinary/provider harness rows remain readable inside the expanded details with stable item ids.

## Same-session complete/reload pair

- Session ID: `5ac2f990-2a98-4131-9650-d0893304a5ae`
- Session key: `agent:main:dashboard:9227aaf3-7dfa-488f-857d-a31ebedcaaac`
- Provider/model: MiniMax / `MiniMax-M3` (thinking=adaptive)
- MiniMax item id: `minimax-commentary-0-efe5d3311a9b4213b3943c77`
- Ordinary id: `commentary-0-6f61f0dd3fc566f4b0ebb032`
- Provider id: `msg_progress_151324_cdcca230`
- Served build-id: `2026.9.4-4dfb38c98d0b-2026-09-19T03-23-00.270Z-a616a55da894b94882443a039a2695f1fb8f94af1cba04c69bf81f3d889398d6`
- Invitation card: dismissed before screenshots

## Live stream emission (separate session — no reload)

- Session ID: `4cb29a1a-640c-4e70-8b93-286d49d2fa8e`
- MiniMax item id: `minimax-commentary-0-beb4a8d5ffbe44c8b922d514`
- Emitted text (Gateway): `Running a 40-second sleep followed by UTC date.`
- Control UI body during stream: **MiniMax text absent** (`inBody=false`)

## Labeled screenshots (hosted outside source tree)

Release: https://github.com/Frank-zhu0404/openclaw/releases/tag/pr-151324-rev19-evidence

| Label                 | File                                                                                                                                                                      | MD5                                | What it shows                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| STREAM                | [01-stream-minimax-absent.png](https://github.com/Frank-zhu0404/openclaw/releases/download/pr-151324-rev19-evidence/01-stream-minimax-absent.png)                         | `923e930d6bbf4c67f8474ab6964cf635` | Live mid-turn; MiniMax emitted but **absent** from normal reply        |
| AFTER / COLLAPSED     | [02-complete-collapsed-minimax-absent.png](https://github.com/Frank-zhu0404/openclaw/releases/download/pr-151324-rev19-evidence/02-complete-collapsed-minimax-absent.png) | `51e2482428325d9641b8dc742a55a0c9` | Complete; activity **collapsed**; MiniMax **absent** from normal reply |
| EXPANDED tool details | [03-complete-expanded-tool-details.png](https://github.com/Frank-zhu0404/openclaw/releases/download/pr-151324-rev19-evidence/03-complete-expanded-tool-details.png)       | `f5fe84269e2f0684af4d1ff9bff40103` | Same session; activity **expanded**; MiniMax visible **only** here     |
| RELOAD / COLLAPSED    | [04-reload-collapsed-minimax-absent.png](https://github.com/Frank-zhu0404/openclaw/releases/download/pr-151324-rev19-evidence/04-reload-collapsed-minimax-absent.png)     | `12c6ea0d14240c5c0e3d1b9e09d24bd4` | Hard reload; collapsed; MiniMax still **absent**                       |
| RELOAD / EXPANDED     | [05-reload-expanded-tool-details.png](https://github.com/Frank-zhu0404/openclaw/releases/download/pr-151324-rev19-evidence/05-reload-expanded-tool-details.png)           | `5178eb414320c905dce4bf980b548631` | Hard reload; expanded; MiniMax only inside expansion                   |

**Before/after delivery:** treat COLLAPSED as the normal-reply “after” surface and EXPANDED as the tool-details surface where narration may appear. Both destinations: this `PROOF.md` (URLs) + PR comment embeds.

## Redacted JSON (in-tree, small)

- `transcript-commentary-emitted-5ac2f990.redacted.json`
- `transcript-provider-progress-5ac2f990.redacted.json`
- `transcript-ui-visible-5ac2f990.redacted.json`
- `transcript-commentary-emitted-4cb29a1a.redacted.json` (live-stream emission)

## Honesty

- Ordinary `commentary-*` and provider `msg_*` rows are a **labeled local evidence harness** entering with `phase=commentary`, then projected via real Gateway `projectChatDisplayMessages({ includeCommentaryFallbacks: true })`.
- MiniMax emit/filter + shell turn are live (`https://api.minimaxi.com`).
- Bulky PNGs were **removed from the source PR diff** and uploaded as release assets (Rev 19 ask).
- No secrets in this tree.
