// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

const cubeOdd = (arr) => {
  if (arr.find(isNaN)) return 'nope';

  let result = 0;
  arr.forEach(element => {
    if (element % 2 !== 0) result += (Math.pow(element, 3));
  });

  return result;
}
