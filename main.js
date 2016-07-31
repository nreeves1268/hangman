var listOfSecretWords = ['Frodo', 'Sam', 'Gandalf', 'Merry', 'Pippin'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayLetters(arrayOfLetters, receivingDiv) {
  var clickableLettersHTML = "";
  arrayOfLetters.forEach(function(letter){clickableLettersHTML += "<span class='displayLetters'>" + letter + "</span>"});
  receivingDiv.html(clickableLettersHTML);

}

var indexOfWord = getRandomIntInclusive (0,listOfSecretWords.length);
var secretWord = listOfSecretWords[indexOfWord];

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


$(function() {
  displayLetters(alphabet, $('#allLetters'));
  displayLetters(secretWord.split(''), $('#secretWord'));
  $('#secretWord span').addClass('secretLetterUnderline secretLetterInvisible');

  $('#allLetters span').click(function(e) { console.log(e.target.innerText) });

});

