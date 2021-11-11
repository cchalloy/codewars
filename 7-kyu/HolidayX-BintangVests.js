// https://www.codewars.com/kata/57e93e4a2aee4974d4000c2f

const vestBuy = (price, haggle) => {
  const percents = {
    light: 20,
    medium: 30,
    heavy: 40,
    walkandswear: 90
  };

  return percents[haggle] ? price - (price / 100.0 * percents[haggle]) : 'Run!';
}
