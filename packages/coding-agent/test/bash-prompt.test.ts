import { describe, expect, test } from "bun:test";
import bashDescription from "../src/prompts/tools/bash.md" with { type: "text" };

describe("bash prompt", () => {
	test("routes repeated clock polling to one bounded wait", () => {
		expect(bashDescription).toContain("NEVER use repeated `date` or status commands");
		expect(bashDescription).toContain("poll readiness, completion, or elapsed time");
		expect(bashDescription).toContain("one purpose-built bounded wait or background job");
		expect(bashDescription).toContain("One-shot `date` calls for a timestamp are allowed");
		expect(bashDescription).toContain("stat, date, mktemp");
	});

	test("uses an available dedicated tool instead of shelling out", () => {
		expect(bashDescription).toContain("When an available dedicated tool covers the operation");
		expect(bashDescription).toContain("use it instead of shelling out");
		expect(bashDescription).toContain("Kubernetes tools instead of `kubectl`");
	});
});
