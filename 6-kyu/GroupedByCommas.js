// https://www.codewars.com/kata/5274e122fc75c0943d000148

const groupByCommas = (num) => {
  num = num.toString();
  if (num.length < 4) return num;

  let result = [];
  let reverseNum = num.split('').reverse();
  for (let index = 0; index < reverseNum.length; index+=3) {
    result.push(reverseNum.slice(index, index + 3).reverse().join(''));
  }

  return result.reverse().join();
}
