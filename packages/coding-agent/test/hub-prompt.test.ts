import { describe, expect, test } from "bun:test";
import hubDescription from "../src/prompts/tools/hub.md" with { type: "text" };

describe("hub prompt", () => {
	test("instructs one indefinite wait when completely blocked without a deadline", () => {
		expect(hubDescription).toContain("set `timeoutMs: 0` for one indefinite wait");
		expect(hubDescription).toContain("NEVER repeat finite waits");
		expect(hubDescription).toContain("Use a finite timeout only when a real deadline matters");
		expect(hubDescription).not.toContain("re-issue to keep waiting");
	});

	test("batches independent fire-and-forget sends to different peers", () => {
		expect(hubDescription).toContain("Batch independent fire-and-forget sends to different peers");
		expect(hubDescription).toContain("sequence only when a delivery result determines the later send");
		expect(hubDescription).toContain("fire-and-forget, NEVER blocks");
		expect(hubDescription).toContain("await: true");
	});
});
