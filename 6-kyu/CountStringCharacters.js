// https://www.codewars.com/kata/52efefcbcdf57161d4000091

const count = (string) => {
  let result = {};
  for (const iterator of string) {
    result[iterator] = ++result[iterator] || 1;
  }

  return result;
}
