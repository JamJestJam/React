export function RandomNumbers(count: number, max = 20): number[] {
  const numbers: number[] = [];
  if (count >= max) {
    while (numbers.length < count) numbers.push(0);
    return numbers;
  }

  while (numbers.length < count) {
    var r = Math.floor(Math.random() * max) + 1;
    if (numbers.indexOf(r) === -1) numbers.push(r);
  }
  return numbers;
}
