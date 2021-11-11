// https://www.codewars.com/kata/58dd98fe8d29b0f30d0002bd/train/javascript

const objectType = (obj) => { //if no arguments are passed, defaults to null
  if (arguments.length === 0) obj = null;
  return Object.prototype.toString.call(obj);
}
