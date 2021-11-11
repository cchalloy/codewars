// https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x){
  const good = x.filter(v => v === 'good').length;
  return `${(good === 0) && 'Fail!' || (good > 2) && 'I smell a series!' || 'Publish!'}`
}