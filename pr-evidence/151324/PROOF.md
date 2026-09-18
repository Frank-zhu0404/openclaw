# PR #151324 proof: emitted commentary → UI filter (same session)

## Session

- `sessionId`: `fb8ca107-de07-4d5b-a6a7-cd7800435fb3`
- Provider/model: `minimax` / `MiniMax-M3`
- Control UI: local Gateway dashboard
- User prompt ran `sleep 5; date -u +"%Y-%m-%d %H:%M:%S UTC"`

## 1) Commentary was emitted (gateway transcript)

```json
{
  "seq": 4,
  "messageId": "bbfb7e62-880f-4d6f-8d2c-317dc4f1a109",
  "text": "I'll run that command to get a fresh UTC timestamp.",
  "textSignature": "{\"v\":1,\"id\":\"commentary-0-6e0a46eeb0c8491cacc19f3d\",\"phase\":\"commentary\"}",
  "provider": "minimax",
  "model": "MiniMax-M3",
  "note": "Emitted with phase=commentary (should be filtered from Control UI assistant bubbles)"
}
```

File: `transcript-commentary-emitted.redacted.json`

## 2) UI filtered it (same session screenshots)

The commentary sentence (`I'll run that command to get a fresh UTC timestamp.`) does **not** appear as an assistant bubble.

| File                        | MD5                                | Notes                                                                     |
| --------------------------- | ---------------------------------- | ------------------------------------------------------------------------- |
| `proof-stream-filtered.png` | `dde4a22c54ec0d5602948af4bbb96271` | Completed thread; tool run + final UTC; no commentary bubble              |
| `proof-after-complete.png`  | `dde4a22c54ec0d5602948af4bbb96271` | Same completed state (session already finished when captured)             |
| `proof-after-reload.png`    | `14ccfab3c9a76483aa18c8d5b20cc47d` | Hard reload; distinct MD5; final answer retained; commentary still absent |

Manifest: `SAME-SESSION-SHOTS.md`. Page-text check after reload: commentary string not present.

## 3) Provider-keyed progress + final retained

Final assistant text (non-commentary) and tool trajectory: `transcript-ui-visible.redacted.json`.
Screenshots show the tool run chip and final `2026-09-18 05:26:10 UTC`.

## Why earlier evidence was weak

Prior prompts told the model "no commentary", so ClawSweeper could not connect emission → filter. This session allowed narration; transcript proves emission; UI proves filter.
