// https://www.codewars.com/kata/5904d222e1bfd3354e000026

const removeDuplication = (arr) => {
  return arr.reduce((acc, curr) => {
    let temp = arr.filter((v) => v === curr);
    return temp.length === 1 ? [...acc, curr] : acc;
  }, []);
}
