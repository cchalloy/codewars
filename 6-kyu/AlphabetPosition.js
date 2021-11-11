// https://www.codewars.com/kata/546f922b54af40e1e90001da

const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let result = '';
  for (const char of text.toLowerCase()) {
    if (char.match(/[a-z]/i)) {
      result += ' ' + (alphabet.indexOf(char) + 1);
    }
  }
  return result.trim();
}
