import { describe, expect, test } from "bun:test";
import grepDescription from "../src/prompts/tools/grep.md" with { type: "text" };

describe("grep prompt", () => {
	test("batches independent searches and reads when every input is known", () => {
		expect(grepDescription).toContain(
			"MUST batch independent searches and reads in one assistant turn when all patterns, paths, and read selectors are already known",
		);
		expect(grepDescription).toContain(
			"Sequence only when an earlier result determines a later input",
		);
		expect(grepDescription).toContain("Open-ended multi-round search MUST use");
	});

	test("discovers uncertain search roots before grepping", () => {
		expect(grepDescription).toContain("NEVER guess a search root");
		expect(grepDescription).toContain("Use `glob` to locate it or search a known parent");
	});
});
