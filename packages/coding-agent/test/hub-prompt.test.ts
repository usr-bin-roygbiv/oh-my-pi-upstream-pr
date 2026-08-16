import { describe, expect, test } from "bun:test";
import hubDescription from "../src/prompts/tools/hub.md" with { type: "text" };

describe("hub prompt", () => {
	test("does not wait on peers already known to be stopped", () => {
		expect(hubDescription).toContain("A stopped or completed peer cannot answer");
		expect(hubDescription).toContain("consume its delivered result or continue");
		expect(hubDescription).toContain("NEVER wait with `from` after the peer is known to be stopped");
	});
});
