// https://www.codewars.com/kata/563d54a7329a7af8f4000059

const buildRowText = (index, character) => {
  let grid = '|0|1|2|3|4|5|6|7|8|';
  const gridIndex = grid.indexOf(index);

  return (grid.slice(0, gridIndex) + character + grid.slice(gridIndex + 1, grid.length)).replace(/[0-9]/g, ' ')
}
