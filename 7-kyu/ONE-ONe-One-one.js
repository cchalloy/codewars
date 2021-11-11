// https://www.codewars.com/kata/588ac50727eb94c87700001f/train/javascript

const consecutiveOnes = (nums) => {
  let result = 0, temp = 0;

  for (const nb of nums) {
    if (nb === 1) temp += nb;
    if (nb === 0) temp = 0;
    
    if (temp > result) result = temp;
  }

  return result;
};
