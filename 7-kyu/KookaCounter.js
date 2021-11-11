// https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258

const kookaCounter = (laughing) => {
  let result = 0, prev;

  for (let index = 0; index < laughing.length; index += 2) {
    element = laughing[index];
    
    if ((element === 'H' || element === 'h') && element !== prev) {
      result++;
    }
    prev = element;
  }

  return result;
}
