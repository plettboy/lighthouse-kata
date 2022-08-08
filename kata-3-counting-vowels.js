function numberOfVowels(data) {
  var i = data.match(/[aeiou]/gi);
  return i === null ? 0 : i.length;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));