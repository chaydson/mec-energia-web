export function findMaxValue(numbers: number[][]): number {
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (numbers[i][j] > max) max = numbers[i][j];
    }
  }
  return max;
}
