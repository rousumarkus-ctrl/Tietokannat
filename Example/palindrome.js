const word = process.argv[2].toLowerCase();
console.log(word == word.split('').toReversed().join(''));
