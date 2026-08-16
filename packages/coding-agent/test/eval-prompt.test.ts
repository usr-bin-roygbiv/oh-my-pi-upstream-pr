import { describe, expect, test } from "bun:test";
import evalDescription from "../src/prompts/tools/eval.md" with { type: "text" };

describe("eval prompt", () => {
	test("does not rerun an unchanged successful cell", () => {
		expect(evalDescription).toContain("NEVER rerun an identical successful cell merely to reproduce its output");
		expect(evalDescription).toContain("dependent state changed");
		expect(evalDescription).toContain("deliberate reinitialization is required");
	});

	test("preserves stateful recovery and targeted retries", () => {
		expect(evalDescription).toContain("Re-run setup ONLY after `reset`, kernel crash");
		expect(evalDescription).toContain("On error, fix and re-run only the failing step");
	});
});
