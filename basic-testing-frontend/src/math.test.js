import { it, expect } from "vitest";
import { add } from "./math";

it("deve somar todos os valores numéricos de um array", () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = numbers.reduce((acc, curr) => acc + curr, 0);
  const result = add(numbers);
  expect(result).toBe(expected);

  const numbers2 = [-1, 2, -3, 4, -5, 6];
  const expected2 = numbers2.reduce((acc, curr) => acc + curr, 0);
  const result2 = add(numbers2);
  expect(result2).toBe(expected2);

  const numbers3 = [1, 2, 3, 4, 5, -15];
  const expected3 = numbers3.reduce((acc, curr) => acc + curr, 0);
  const result3 = add(numbers3);
  expect(result3).toBe(expected3);

  const numbers4 = [0, 0, 0, 0, 0, 0];
  const expected4 = numbers4.reduce((acc, curr) => acc + curr, 0);
  const result4 = add(numbers4);
  expect(result4).toBe(expected4);

  const numbers5 = [1, "2", 3, 4, 5];
  const expected5 = Error("Todos os valores devem ser numéricos");
  const result5 = add(numbers5);
  expect(result5).toStrictEqual(expected5);

  const numbers6 = [null, 2, 3, 4, 5];
  const expected6 = Error("Todos os valores devem ser numéricos");
  const result6 = add(numbers6);
  expect(result6).toStrictEqual(expected6);
});
