// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

const mumbling = (word) => {
  return word.split('').map((v, i) => v.toUpperCase() + v.toLowerCase().repeat(i)).join('-');
}
