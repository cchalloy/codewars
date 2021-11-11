// https://www.codewars.com/kata/5734c38da41454b7f700106e

const onlyOne = (...args) => {
  if (args.length === 0) return false;

  return [...args].filter((value) => value === true).length === 1 ? true : false;
}
