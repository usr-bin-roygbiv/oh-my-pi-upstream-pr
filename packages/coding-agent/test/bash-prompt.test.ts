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
	test("routes nested shell-language layers through eval", () => {
		expect(bashDescription).toContain("NEVER escape an inline program into a Bash command string");
		expect(bashDescription).toContain("nested quotes or embedded code/data");
		expect(bashDescription).toContain("run the program directly in `eval`");
	});


	test("checks uncertain external executables before dependent work", () => {
		expect(bashDescription).toContain("NEVER guess that an external executable is installed");
		expect(bashDescription).toContain("Use `which` once before composing dependent work");
		expect(bashDescription).toContain("do not run a long command chain that discovers a missing final executable");
	});
	test("sizes predictable finite command deadlines before executing", () => {
		expect(bashDescription).toContain("set `timeout` on the first call");
		expect(bashDescription).toContain("NEVER wait for an avoidable timeout and rerun solely to raise it");
	});
});
