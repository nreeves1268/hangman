var listOfSecretWords = ['Frodo', 'Sam', 'Gandalf', 'Merry', 'Pippin'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeClickableLetters(arrayOfLetters, receivingDiv) {
  var clickableLettersHTML = "";
  arrayOfLetters.forEach(function(letter){clickableLettersHTML += "<span class='clickableLetter'>" + letter + "</span>"});
  receivingDiv.html(clickableLettersHTML);

}

var indexOfWord = getRandomIntInclusive (0,listOfSecretWords.length);
var secretWord = listOfSecretWords[indexOfWord];

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


$(function() {
  makeClickableLetters(alphabet, $('#allLetters'));
  makeClickableLetters(secretWord.split(''), $('#secretWord'));
  $('#secretWord span').addClass('secretLetterUnderline secretLetterInvisible');


});

