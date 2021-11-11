// https://www.codewars.com/kata/52af0d380fcae83a560008af

const handOutGift = (kidNames) => {
  let result = [];
  let extra = '';
  for (kid of kidNames) {
    if (result.includes(kid)) extra = `${kid} got one already !`;
    else result.push(kid);
  }

  return console.log(extra), result;
}
