// https://www.codewars.com/kata/590ee3c979ae8923bf00095b/train/javascript

const color2grey = (image) => {
  let gs = [], temp;

  for (const iterator of image) {
    temp = []
    
    for (const values of iterator) {
      let t = Math.floor(values.reduce((curr, v) => curr + v, 0) / 3);
      temp = [...temp, [t, t, t]];
    }
    gs = [...gs, temp];
  }

  return gs;
}
