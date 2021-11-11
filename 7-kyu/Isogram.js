// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
  return str.toLowerCase().split('').every((v, i, a) => a.indexOf(v) === i);
}