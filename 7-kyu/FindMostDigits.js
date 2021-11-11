// https://www.codewars.com/kata/58daa7617332e59593000006

const findLongest = (array) => {
  return array.reduce((curr, value) => {
    return curr.toString().length >= value.toString().length ? curr : value;
  }, 0);
}
