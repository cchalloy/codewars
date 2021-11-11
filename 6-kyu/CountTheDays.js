// https://www.codewars.com/kata/5837fd7d44ff282acd000157/train/javascript

const countDays = (d) => {
  const given = [d.getMonth(), d.getDay(), d.getFullYear()];
  const now = [(new Date()).getMonth(), (new Date()).getDay(), (new Date()).getFullYear()];

  const isEqual = given.every((v, i) => v === now[i]);
  if (isEqual) return 'Today is the day!';

  const result = d - new Date();
  return result > 0 ? `${Math.round((result) / (1000 * 3600 * 24))} days` : "The day is in the past!";
}
