# PR #151324 — complete ClawSweeper Control UI proof

## Same Control UI session

- Session ID: `99b84e08-d379-44e7-bc6e-1472cc7fedb6`
- Session key: `agent:main:dashboard:1666c077-276c-46a7-bcca-2f0ca31c2cb8`
- Provider/model: MiniMax / `MiniMax-M3`
- Control UI URL: `/chat/main/run-sleep-and-date-command-1666c077`
- Final live run: `5a9423a5-57df-4a4a-86d5-f0d3b9bd2baf`

## Claims proven

1. MiniMax emitted generated commentary blocks with `textSignature.phase=commentary`; generated ids match `commentary-\\d+-[hex24]`.
2. Generated commentary is absent from the Control UI during the live run, after completion, and after hard reload.
3. Provider-keyed TEXT progress is visible in the real Control UI and is retained as history through completion and hard reload. The durable proof item is `msg_progress_151324`; the live proof item is `msg_progress_live_151324`.
4. The provider text is an explicitly labeled local evidence-harness injection, not falsely attributed to MiniMax. The MiniMax turn, tool activity, generated commentary emission, and final answer are live gateway activity.

## Redacted transcript evidence

- `transcript-commentary-emitted-99b84e08.redacted.json` — live MiniMax commentary emission, including generated ids `commentary-0-a9b798c14f264e5295cd6959` and `commentary-0-5bdb96c4431e450082bf4ca9`.
- `transcript-provider-progress-99b84e08.redacted.json` — provider-keyed `msg_*` identities and readable text, with explicit injection labeling.
- `transcript-ui-visible-99b84e08.redacted.json` — same-session UI claims and post-reload text checks.

## Screenshots

| Screenshot                  | MD5                                | State                                                                                                          |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `proof-stream-filtered.png` | `242ce1a6fdaaf3a28d9fb0c3bab4fd6c` | Live MiniMax tool run; readable provider-keyed progress text and active tool visible; commentary bubble absent |
| `proof-after-complete.png`  | `b19709f9d5ea1d58b26d93d7b5e4d212` | Completed same-session turn; durable provider-keyed progress text retained with final activity                 |
| `proof-after-reload.png`    | `405655564913c833bf4c0c29b12fe61b` | Hard reload; durable provider-keyed progress text still visible                                                |

All three screenshots have distinct MD5s. After reload, `document.body.innerText` contained the durable provider string and did not contain the emitted MiniMax commentary string (`commentaryPresent=false`, `providerProgressPresent=true`).

## Deliverable status

Complete. Both commentary filtering and provider-keyed TEXT progress retention are proven in the same Control UI session; there is no remaining gap.
