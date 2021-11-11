// https://www.codewars.com/kata/57e1857d333d8e0f76002169

const changeCount = (change) => {
  const types = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.10,
    quarter: 0.25,
    dollar: 1.00
  };
  let total = 0;

  change.split(' ').forEach(element => {
    total += types[element];
  });

  return '$' + total.toFixed(2);
}
