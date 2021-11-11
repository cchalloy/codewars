// https://www.codewars.com/kata/5298961d9ce954d77b0003a6/train/javascript

const range = (start = 0, end, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  
  // step == 1 only for length to calculate
  // step == 0 for range to calculate
  return Array.from({length: (end-start) / (step || 1)}, (v, i) => start + i * step);
}
