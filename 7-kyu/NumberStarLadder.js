// https://www.codewars.com/kata/5631213916d70a0979000066

const pattern = (n) => {
  let output = '1';
  let start = 1;
  let star = '*';

  for (var i = 2; i <= n; i++) {
    output += `\n${start} ${star.repeat(i-1)} ${i}`;
  }

  return output;
 }
