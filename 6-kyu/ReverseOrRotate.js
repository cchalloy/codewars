// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

const revrot = (str, sz) => {
  if (sz < 1 || sz > str.length) return '';

  let chunked = [];
  let arr = str.split('');
  for (let index = 0; index < arr.length; index+=sz) {
    chunked.push(arr.slice(index, index+sz));
  }

  let result = '';
  for (const iterator of chunked) {
    if (iterator.length >= sz) {
      const isRev = iterator.reduce((curr, value) =>  curr + value**3 , 0) % 2 === 0;

        // iterator.push(iterator.shift()); + iterator.join('')
        result += (isRev) ? iterator.reverse().join('') : iterator.slice(1).concat(iterator.slice(0, 1)).join('');
    }
  }

  return result;
}
