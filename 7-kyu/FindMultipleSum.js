const findSum = (nTimes) => {
  let result = 0;
  for (let index = 0; index <= nTimes; index++) {
    if (index % 3 === 0 || index % 5 === 0) result += index;
  }
  
  return result;
}
