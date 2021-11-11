// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

const flattenAndSort = (array) => {
  return array.reduce((curr, value) => {
    return [...curr, ...value];
  }, []).sort((a, b) => a - b);
}

// other solution
function flattenAndSort1(array) {
  return [].concat.apply([], array).sort(function(a,b){return a - b});
}
