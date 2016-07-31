function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayLetters(arrayOfLetters, receivingDiv) {
  var clickableLettersHTML = "";
  arrayOfLetters.forEach(function(letter){clickableLettersHTML += "<span class='displayLetters'>" + letter + "</span>"});
  receivingDiv.html(clickableLettersHTML);

}

var clickLetterHandler = function(e) {
  var clickedLetter = e.target.innerText.toUpperCase();
  var foundLetter = false;
  $('#secretWord span').each(function(_, letterSpan){
    var currentLetterInSpan = letterSpan.innerText.toUpperCase();
    if (clickedLetter == currentLetterInSpan) {
      $(letterSpan).removeClass('secretLetterInvisible').addClass('secretLetterVisible');
      foundLetter = true;
    }
    $(e.target).hide();
  });

  if (foundLetter == false) {
      var bodyPartToShow = bodyParts[currentMissedGuess];
      $('#' + bodyPartToShow).css('visibility', 'visible');
      currentMissedGuess++;
      if (currentMissedGuess == maxMissedGuesses) {
        $('h1').text('The Ringwraiths found you!');
      }
  }
  else {
    var allLettersFound = $('#secretWord span').hasClass('secretLetterInvisible') == false;
    if (allLettersFound) {
      $('h1').text('You have cast the ring into Mount Doom!');
    }
  }
};

var currentMissedGuess = 0;
var bodyParts = ['head', 'torso', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
var maxMissedGuesses = bodyParts.length;

$(function() {
  $('#hangmanArt .bodyPart').css('visibility', 'hidden');
  var listOfSecretWords = ['Frodo', 'Sam', 'Gandalf', 'Merry', 'Pippin'];
  var indexOfWord = getRandomIntInclusive (0,listOfSecretWords.length);
  var secretWord = listOfSecretWords[indexOfWord];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  displayLetters(alphabet, $('#allLetters'));
  var secretWordLetters = secretWord.split('');
  displayLetters(secretWordLetters, $('#secretWord'));
  $('#secretWord span').addClass('secretLetterUnderline secretLetterInvisible');

  $('#allLetters span').click(clickLetterHandler);

});

