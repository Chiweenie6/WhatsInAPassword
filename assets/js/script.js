// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Alphabet criteria
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var userLowerLetters;


var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var userUpperLetters;


// Numeric criteria
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userNumbers;


// Special characters criteria
spChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", ":", ";","'", '"', "<", ">", ",", ".", "?"];
var userSpChars;

var pWordLength = "";

function generatePassword() {

  // Password length criteria
var p
var pWordLength = prompt("How long do you want your password to be?");

// Tried if else statement, but while statement works better
while (pWordLength < 8 || pWordLength > 128) {
  alert("Your password must be between 8 and 128 characters. Please enter new password length.");
  var pWordLength = prompt("How long do you want your password to be?");
}
alert("YAY! 😀 Lets see what type of characters you want to incorporate in your new password. 'Ok' for yes and 'cancel' for no.")


// Characters for password prompts
var userLowerLetters = confirm("Would you like lower case letters in your password?");
var userUpperLetters = confirm("Would you like upper case letters in you password?");
var userNumbers = confirm("Would you like numbers in your password?")
var userSpChars = confirm("would you like special characters in your password?")

// If the user doesn't select any character types
while (userLowerLetters !== true && userUpperLetters !== true && userNumbers !== true && userSpChars !== true) {
  alert("Ooops 😥, looks like you did not select any character type(s). At least one character type must be selected to create password.")
  var userLowerLetters = confirm("Would you like lower case letters in your password?");
  var userUpperLetters = confirm("Would you like upper case letters in you password?");
  var userNumbers = confirm("Would you like numbers in your password?")
  var userSpChars = confirm("would you like special characters in your password?")
}

// Making the character types able to be combined
var charSoup = [];
if (userLowerLetters) {
    charSoup = charSoup.concat(lowerLetters);
  }
if (userUpperLetters) {
    charSoup = charSoup.concat(upperLetters);
  }
if (userNumbers) {
    charSoup = charSoup.concat(numbers);
  }
if (userSpChars) {
    charSoup = charSoup.concat(spChars);
  }

// console.log(charSoup);

// Create new password
var newPassword = "";
for (var i = 0; i < pWordLength; i++) {
  newPassword = newPassword + charSoup[Math.floor(Math.random() * charSoup.length)];
}
return newPassword;
}