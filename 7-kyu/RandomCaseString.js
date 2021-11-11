// https://www.codewars.com/kata/57073869924f34185100036d

const randomCase = (string) => {
  let result = '';
  let rnd = 0;
  
  for (let index = 0; index < string.length; index++) {
    rnd = Math.floor(Math.random() * 2);
    result += (rnd === 0) ? string.charAt(index).toLowerCase() : string.charAt(index).toUpperCase();
  }

  return result;
}
