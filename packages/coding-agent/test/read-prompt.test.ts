import { describe, expect, test } from "bun:test";
import readDescription from "../src/prompts/tools/read.md" with { type: "text" };

describe("read prompt", () => {
	test("batches independent reads when every input is already known", () => {
		expect(readDescription).toContain(
			"MUST batch independent reads in one assistant turn when all paths and selectors are already known",
		);
		expect(readDescription).toContain(
			"Sequence only when an earlier result determines a later path or selector",
		);
		expect(readDescription).not.toContain("SHOULD parallelize independent reads");
	});

	test("does not repeat an unchanged successful read", () => {
		expect(readDescription).toContain("One successful result is one snapshot");
		expect(readDescription).toContain("NEVER repeat the same read merely to re-read unchanged output");
		expect(readDescription).toContain("intervening state change");
	});
	test("reuses covered numeric selector ranges", () => {
		expect(readDescription).toContain("Numeric selectors are inclusive");
		expect(readDescription).toContain("for an unchanged file, request only unseen ranges");
		expect(readDescription).toContain("NEVER issue a selector fully contained in a successful earlier result");
	});

	test("discovers uncertain paths before reading", () => {
		expect(readDescription).toContain("NEVER guess a path");
		expect(readDescription).toContain("Use `glob` to locate files or read the known parent directory");
	});

	test("rejects negative line selectors before reading", () => {
		expect(readDescription).toContain("Negative line offsets are invalid");
		expect(readDescription).toContain("NEVER use `:-N` or `:raw:-N`");
		expect(readDescription).toContain("Derive `N` from an observed footer or line count");
	});

	test("routes conflict inspection without wildcard resources", () => {
		expect(readDescription).toContain("Use `<file>:conflicts` to list every unresolved block");
		expect(readDescription).toContain("`conflict://` addresses exactly one known block");
		expect(readDescription).toContain("NEVER accepts wildcards");
	});
});
