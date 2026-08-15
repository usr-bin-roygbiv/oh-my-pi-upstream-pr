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
});
