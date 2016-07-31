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

var clickLetterHandler = function(e) {
  var clickedLetter = e.target.innerText.toUpperCase();
  $('#secretWord span').each(function(_, letterSpan){
    var currentLetterInSpan = letterSpan.innerText.toUpperCase();
    if (clickedLetter == currentLetterInSpan){
      $(letterSpan).removeClass('secretLetterInvisible').addClass('secretLetterVisible');
    }
  })
};


$(function() {
  displayLetters(alphabet, $('#allLetters'));
  var secretWordLetters = secretWord.split('');
  displayLetters(secretWordLetters, $('#secretWord'));
  $('#secretWord span').addClass('secretLetterUnderline secretLetterInvisible');

  $('#allLetters span').click(clickLetterHandler);

});

