import { it, expect } from "vitest";
import { add } from "./math";

it("deve somar todos os valores numéricos de um array", () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = add(numbers);
  expect(result).toBe(15);

  const numbers2 = [-1, 2, -3, 4, -5, 6];
  const result2 = add(numbers2);
  expect(result2).toBe(3);

  const numbers3 = [1, 2, 3, 4, 5, -15];
  const result3 = add(numbers3);
  expect(result3).toBe(0);

  const numbers4 = [0, 0, 0, 0, 0, 0];
  const result4 = add(numbers4);
  expect(result4).toBe(0);

  const numbers5 = ["1", 2, 3, 4, 5];
  const result5 = add(numbers5);
  expect(result5).toStrictEqual(Error("Todos os valores devem ser numéricos"));
});
