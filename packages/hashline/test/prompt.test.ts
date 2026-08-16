import { describe, expect, test } from "bun:test";
import editPrompt from "../src/prompt.md" with { type: "text" };

describe("edit prompt", () => {
	test("preflights the complete freeform payload before calling", () => {
		expect(editPrompt).toContain("PAYLOAD COMPLETE");
		expect(editPrompt).toContain("starts with `*** Begin Patch`");
		expect(editPrompt).toContain("ends with `*** End Patch`");
		expect(editPrompt).toContain("no text outside those markers");
	});
});
