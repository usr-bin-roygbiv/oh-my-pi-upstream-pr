import { describe, expect, test } from "bun:test";
import hubDescription from "../src/prompts/tools/hub.md" with { type: "text" };

describe("hub prompt", () => {
	test("does not wait on peers already known to be stopped", () => {
		expect(hubDescription).toContain("A stopped or completed peer cannot answer");
		expect(hubDescription).toContain("consume its delivered result or continue");
		expect(hubDescription).toContain("NEVER wait with `from` after the peer is known to be stopped");
	});
	test("refreshes the roster before addressing an uncertain peer", () => {
		expect(hubDescription).toContain("If an exact live peer ID is not already in current roster context");
		expect(hubDescription).toContain("run `list` before `send` or filtered `wait`");
		expect(hubDescription).toContain("Never derive a recipient from a task label or historical output");
	});
});
