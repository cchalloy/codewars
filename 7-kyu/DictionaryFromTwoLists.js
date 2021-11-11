// https://www.codewars.com/kata/5533c2a50c4fea6832000101

const createDict = (keys, values) => {
  let result = {};

  for (let index = 0; index < keys.length; index++) {
    result[keys[index]] = values[index] || null;
  }

  return result;
}
