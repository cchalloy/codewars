// https://www.codewars.com/kata/55d7e5aa7b619a86ed000070

const orderWord = (string) => {
  if (!Boolean(string)) return "Invalid String!";

  return Array.from(string).sort().join('');
}
