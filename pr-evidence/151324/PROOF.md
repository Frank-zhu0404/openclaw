# PR #151324 — ClawSweeper Control UI proof

## Primary same-session capture

- Session ID: `99b84e08-d379-44e7-bc6e-1472cc7fedb6`
- Provider/model: `minimax` / `MiniMax-M3`
- Control UI session URL: `/chat/main/run-sleep-and-date-command-1666c077`
- Prompt: run `sleep 18; date -u`, narrate before the tool, and report the result.
- Gateway transcript proof: `transcript-commentary-emitted-99b84e08.redacted.json`
- UI-visible projection: `transcript-ui-visible-99b84e08.redacted.json`

## Commentary emission and filtering

The gateway transcript contains MiniMax text with `textSignature.phase=commentary` (seq 4). While the tool was still running, I hard-reloaded the same session; the live-progress shot shows the active tool and no commentary assistant bubble. The completion and post-reload shots retain the result and show no commentary.

After reload, Control UI `document.body.innerText` did not contain the emitted commentary string (`false`).

| Screenshot                  | MD5                                | State                                                          |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------- |
| `proof-stream-filtered.png` | `46341c175bbe7bfa9124a1c64eef2865` | Tool active after reload; commentary absent                    |
| `proof-after-complete.png`  | `a4e2608482abfb7c8bd6c4ced983afe9` | Final result retained; commentary absent                       |
| `proof-after-reload.png`    | `c13c46451cb71fade4bbf16961e7fec9` | Same session hard-reloaded; result retained; commentary absent |

## Remaining gap

The live shot visibly retains the tool activity chip, but this run did **not** surface a separate provider-keyed TEXT progress line in the task-activity feed after reconciliation. The provider-keyed-text-vs-tool-chip criterion remains unproven; no product source was changed.

No secrets were committed.
