import { it, expect } from "vitest";
import { add } from "./math";

it("deve somar todos os valores numéricos de um array", () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = 15;
  const result = add(numbers);
  expect(result).toBe(expected);

  const numbers2 = [-1, 2, -3, 4, -5, 6];
  const expected2 = 3;
  const result2 = add(numbers2);
  expect(result2).toBe(expected2);
});
