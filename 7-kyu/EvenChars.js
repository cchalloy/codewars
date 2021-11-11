// https://www.codewars.com/kata/566044325f8fddc1c000002c

const evenChars = (string) => {
  if (string.length < 2 || string.length > 100) return "invalid string";
  return string.split('').filter((value, index) => index % 2 !== 0);
}
