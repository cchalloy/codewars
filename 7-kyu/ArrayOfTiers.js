// https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript

const createArrayOfTiers = (num) => {
  let result = [];
  let element = '';

  for (const n of num.toString()) {
    element += n;
    result.push(element);
  }

  return result;
}
