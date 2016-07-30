var listOfSecretWords = ['Frodo', 'Sam', 'Gandalf', 'Merry', 'Pippin'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var indexOfWord = getRandomIntInclusive (0,listOfSecretWords.length);
var secretWord = listOfSecretWords[indexOfWord];

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


$(function() {
  var alphabetHTML = "";
  alphabet.forEach(function(letter){alphabetHTML += "<span>" + letter + "</span>"})
  console.log(alphabetHTML)
  $('#allLetters').html(alphabetHTML);
});
