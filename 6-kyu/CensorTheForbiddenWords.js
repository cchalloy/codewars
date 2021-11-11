// https://www.codewars.com/kata/591a86bfe76dc98f24000030/train/javascript

const censorThis = (text, forbiddenWords) => {
  for (const word of forbiddenWords) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    text =  text.replace(regex, '*'.repeat(word.length));
  }

  return text;
}
