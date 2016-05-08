// add restart

var wordList = ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "compass", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];

// random word function
function randomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}
var wrong = 0;
var lives = 6;
var word = randomWord();
var blankWord = [];

// Display Blank Word
(function displayBlankWord() {
  for (var i = 0; i < word.length; i++) {
    blankWord.push('_');
  }
  $('#wordDisplay').text(blankWord.join(' '));
})();

// click on letter and remove
$('button').on('click', function() {
  var guess = $(this).text();
  $(this).remove();
  checkGeuss(guess);
});

// Check if geuss is correct & update display
function checkGeuss(letter) {
  var isWrong = true;
  
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      blankWord[i] = letter;
      isWrong = false;
    }
  }
  if (isWrong) {
    wrong++;
  }
 
  $('#wordDisplay').text(blankWord.join(' '));
  if ((lives - wrong) < 0) {
    return gameOver();
  }
  // change lives counter
  $('h3').text("Lives: " + (lives - wrong));
}

function gameOver() {
  console.log("Game Over");
  alert("Game Over");
}