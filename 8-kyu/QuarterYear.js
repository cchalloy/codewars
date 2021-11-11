// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
    return Math.ceil(month / 3);
  }

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));