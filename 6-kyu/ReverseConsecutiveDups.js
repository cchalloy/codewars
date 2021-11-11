// https://www.codewars.com/kata/577c2d68311a24132a0002a5

const reverseCase = (string) => {
  let strings = string.match(/(.)(\1*)/g);

  for (let index = 0; index < strings.length; index++) {
    const element = strings[index];
    if (element.length > 1)
      strings.splice(index, 1, element === element.toLowerCase() ? element.toUpperCase() : element.toLowerCase())
  }
  
  return strings.join('');
}
