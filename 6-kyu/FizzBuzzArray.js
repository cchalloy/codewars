const fizzbuzzarray = (number) => {
  let i = 1, a = 0, b = 0, c = 0;

  while (i < number) {
    if (i % 15 === 0) c++;
    else if (i % 5 === 0) b++; 
    else if (i % 3 === 0) a++;
    i++;
  }

  return [a, b, c];
}
