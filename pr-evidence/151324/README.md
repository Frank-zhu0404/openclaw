# Evidence for PR #151324 (Rev 18)

Same-session Control UI proof that ordinary generated `commentary-*` and provider-keyed `msg_*` text **enter as `phase=commentary`**, pass through Gateway `chat.history` / `projectChatDisplayMessages({ includeCommentaryFallbacks: true })`, and remain readable with the **same item identities** through streaming → completion → reload, while MiniMax `minimax-commentary-*` stays phase-tagged (`extractText` null).

See `PROOF.md` and `SAME-SESSION-SHOTS.md`.
