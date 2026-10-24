import test from "node:test";
import assert from "node:assert/strict";
import { formatNaira } from "../../src/utils/formatNaira.ts";

test("formats zero and the existing large NGN price convention", () => {
  assert.equal(formatNaira(0), "₦0");
  assert.equal(formatNaira(124_000_000), "₦124,000,000");
});

test("keeps whole-naira rounding and negative amounts", () => {
  assert.equal(formatNaira(1234.4), "₦1,234");
  assert.equal(formatNaira(1234.5), "₦1,235");
  assert.equal(formatNaira(-1234.5), "-₦1,235");
});

test("preserves Intl bigint precision beyond the safe integer range", () => {
  assert.equal(formatNaira(9_007_199_254_740_993n), "₦9,007,199,254,740,993");
});
