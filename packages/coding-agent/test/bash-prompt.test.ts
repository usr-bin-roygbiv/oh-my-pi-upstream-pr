import { describe, expect, test } from "bun:test";
import bashDescription from "../src/prompts/tools/bash.md" with { type: "text" };

describe("bash prompt", () => {
	test("discovers uncertain input paths before executing", () => {
		expect(bashDescription).toContain("NEVER guess an input path");
		expect(bashDescription).toContain("Use `glob` or read a known parent directory first");
	});

	test("inspects uncertain CLI flags before executing", () => {
		expect(bashDescription).toContain("NEVER guess a CLI flag");
		expect(bashDescription).toContain("Inspect the command's `--help` once first");
	});
});
