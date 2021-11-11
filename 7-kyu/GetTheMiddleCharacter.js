const getMiddle = (s) => {
  const middle = Math.ceil(s.length / 2);

  return s.substring(middle - 1, s.length % 2 === 0 ? middle + 1 : middle);
}