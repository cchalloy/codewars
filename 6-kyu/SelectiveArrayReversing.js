// https://www.codewars.com/kata/58f6000bc0ec6451960000fd

const selectiveReverse = (arr, size) => {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    result = [...result, arr.slice(i, i + size).reverse()];

    i += size;
  }

  return result;
}
