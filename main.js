var listOfSecretWords = ['Frodo', 'Sam', 'Gandalf'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var indexOfWord = getRandomIntInclusive (0,2);
var secretWord = listOfSecretWords[indexOfWord];
