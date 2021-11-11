// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

const dontGiveMeFive = (start, end) => {
  return Array.from({length: end - start + 1}, (_, i) => start + (i*1) ).filter((v) => !v.toString().includes('5')).length
}
