// @vitest-environment node
import { describe, expect, it } from "vitest";
import { buildCachedChatItems } from "./chat-thread.ts";

type CachedChatItemsProps = Parameters<typeof buildCachedChatItems>[0];

function createProps(overrides: Partial<CachedChatItemsProps> = {}): CachedChatItemsProps {
  return {
    paneId: "pane-a",
    sessionKey: "main",
    runId: null,
    messages: [],
    toolMessages: [],
    streamSegments: [],
    stream: null,
    streamStartedAt: null,
    showToolCalls: true,
    ...overrides,
  };
}

describe("live commentary stream visibility", () => {
  it("hides generated commentary live stream segments while keeping provider-keyed progress", () => {
    const items = buildCachedChatItems(
      createProps({
        streamSegments: [
          {
            text: "Internal context noted for this tool turn.",
            ts: 0,
            itemId: "commentary-0-aaaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            text: "Provider keyed progress text",
            ts: 1,
            itemId: "msg_progress",
          },
          {
            text: "Here is the final answer.",
            ts: 3,
            itemId: "final-answer-1-bbbbbbbbbbbbbbbbbbbbbbbb",
          },
        ],
        toolMessages: [
          {
            role: "toolResult",
            content: "Tool output",
            timestamp: 2,
          },
        ],
      }),
    );

    expect(items).toMatchObject([
      { kind: "stream", text: "Provider keyed progress text", startedAt: 1 },
      { kind: "group", role: "tool" },
      { kind: "stream", text: "Here is the final answer.", startedAt: 3 },
    ]);
    expect(items.some((item) => "text" in item && item.text.includes("Internal context"))).toBe(
      false,
    );
  });
});
