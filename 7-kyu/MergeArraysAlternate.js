// https://www.codewars.com/kata/583af10620dda4da270000c5

const mergeArrays = (a, b) => {
  if (a.length === 0 || b.length === 0) return;

  let result = [];
  let i = j = 0;
  do {
    if (i < a.length) result.push(a[i]);
    if (j < b.length) result.push(b[j]);

    i++;
    j++;
  } while (i < a.length || j < b.length);

  return result;
}
