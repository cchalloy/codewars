// https://www.codewars.com/kata/5a1ebe0d46d843454100004c/train/javascript

function toDayOfYear(calulates) {
    const d = new Date(calulates.reverse().join('-'));
    const primary = new Date(d.getFullYear() + '-1-1');
    return Math.round((d - primary) / (1000 * 3600 * 24));
}
