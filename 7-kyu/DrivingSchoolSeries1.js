// https://www.codewars.com/kata/58999425006ee3f97c00011f

const passed = (list) => {
  const max = 18;
  const filtered = list.filter((v) => v <= max);

  if (filtered.length === 0) return 'No pass scores registered.';
  return Math.round(filtered.reduce((curr, value) => curr + value, 0) / filtered.length);
}
