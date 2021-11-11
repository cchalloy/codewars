// https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript
// better solution 

const changer = (str) => {
  return str.toLowerCase().replace(/[a-z]/g, (s) => {
    if (s === 'z') return 'a';

    return String.fromCharCode(s.charCodeAt(0) + 1);
  }).replace(/[aiueo]/g, (s) => s.toUpperCase());
}
