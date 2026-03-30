/**
 * Calculates the sum of an array of numbers.
 * @param numbers - An array of numbers to sum.
 * @returns The sum of all numbers in the array
 */
export function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
