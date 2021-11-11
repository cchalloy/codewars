// https://www.codewars.com/kata/584ebd7a044a1520f20000d5/train/javascript

const range = (...args) => {
  // 1 arg = stop
  // 2 args = start, stop
  // 3 args = start, step, stop
  let start, stop, step;
  
  if (args.length === 1) { 
    start = 1;
    step = 1;
    [stop] = args;
  }
  if (args.length === 2) step = 1, [start, stop] = args;
  if (args.length === 3) [start, step, stop] = args;
  
  return Array.from({length: (stop-start) / step+1}, ((v, i) => start + i*step));
}
