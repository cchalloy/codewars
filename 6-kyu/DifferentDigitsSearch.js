// https://www.codewars.com/kata/59113da398dcd456270000a8

const differentDigitsNumberSearch = (arr) => {
  let result = -1;
  
  for (const nb of arr) {
    let nbs = nb.toString();
    let max = true

    for (let index = 0; index < nbs.length; index++) {
      const element = nbs[index];
      if (nbs.match(new RegExp(element, 'g')).length > 1) {
        max = false;
      }
    }
    if (max) result = nbs;
  }

  return result;
}
