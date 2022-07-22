// Returns an array of numbers of one decimal place up to the given number. i.e. (1) => 0, 0.1, 0.2....1
export const decimalRange = (n: number) =>
  Array.from({ length: n * 10 + 1 }, (value, key) => key).map(
    (x: number) => x / 10
  );
