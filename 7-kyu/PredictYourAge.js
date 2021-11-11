// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

const predictAge = (...args) => {
  return Math.floor(Math.sqrt(args.map((v) => v*v).reduce((curr, a) => curr + a, 0)) / 2);
}
