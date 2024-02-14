export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    if (typeof number !== "number") {
      return new Error("Todos os valores devem ser numéricos");
    }

    sum += number;
  }

  return sum;
}
