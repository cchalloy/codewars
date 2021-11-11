// https://www.codewars.com/kata/5844a422cbd2279a0c000281

const multi = (arr) => {
  return arr.reduce((curr, value) => {
    return curr * value
  })
}

const add = (arr) => {
  return arr.reduce((curr, value) => {
    return curr + value
  })
}

const reverse = (str) => {
  return str.split('').reverse().join('');
}
