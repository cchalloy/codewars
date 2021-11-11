// https://www.codewars.com/kata/57b4dd38d2a31c75f7000299

const SmallWordHelper = (sentence) => {
  return sentence.split(' ').map((word) => {

    if (word.length <= 3) word = word.toUpperCase();

    if (word.length >= 4) word = word.replace(/[aeiou]/gi, '');

    return word;

  }).join(' ');
}
