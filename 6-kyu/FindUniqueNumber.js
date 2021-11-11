// https://www.codewars.com/kata/55f81f9aa51f9b72a200002f

const findUnique = (numbers) => {
  if (numbers.length === 1) return numbers[0];

  let count = {};
  for (const iterator of numbers) {
    count[iterator] = ++count[iterator] || 1;
  }

  let result = 0;
  for (const key in count) {
    if (count[key] === 1) result = key;
  }

  return +result;
}
