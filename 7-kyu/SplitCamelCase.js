// https://www.codewars.com/kata/586c3070b98de0a57000012e

const splitter = (str) => {
  if (str.length === 0) return '';

  // return str.split(/(?=[A-Z])/).join(' ');
  return str.replace(/([A-Z]+)/g, " $1").replace(/^\s/, "");
}
