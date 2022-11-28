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


// Password length criteria
var pWordLength = "";


function generatePassword() {
var pWordLength = prompt("How long do you want your password to be?");

if (pWordLength < 8 || pWordLength > 128) {
  alert("Your password must be between 8 and 128 characters. Please enter new password length.");
  if (pWordLength < 8 || pWordLength > 128) {pWordLength;}
} else {
  alert("Your password will be " + document.pWordLength + "characters long.")
}

// Characters for password prompts
var userLowerLetters = confirm("Would you like lower case letters in your password?");
var userUpperLetters = confirm("Would you like upper case letters in you password?");
var userNumbers = confirm("Would you like numbers in your password?")
var userSpChars = confirm("would you like special characters in your password?")

// 
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

// function randoChars(length) {
//   var mixUp = Math.floor(Math.random() * length);
//   return mixUp;
// }

var newPassword = "";
for (var i = 0; i < pWordLength; i++) {
  newPassword = newPassword + charSoup[Math.floor(Math.random() * charSoup.length)];
}
return newPassword;
}







// // var userPLength = prompt("How long do you want your password to be?");

// var pLength = prompt("How long do you want your password to be?");

// function pWordLength () {
//   let userPLength = prompt("How long do you want your password to be?");
//   if (userPLength < 8) {
//     alert("Your password is too short, length must be between 8 and 128 characters.");
//     if (userPLength < 8) pWordLength();
//   } else if (userPLength > 128) {
//     alert("Your password is too long, length must be between 8 and 128 characters.");
//     if (userPLength > 128) pWordLength();
//   } else {
//   }; return;
// }



// function pWordLetters() {
//   var userLetters = confirm("Would you like letters in your password?");
//   var ranLetters = {
//     userLetters: userLetters
//   };
//   return ranLetters;
// }

// function randomChoice(length) {
//   var randomChars = Math.floor(Math.random() * length);
//   return randomChars;
// }

// function generatePassword() {
//   var chosen = pWordLetters();
//   var useableLetters = [];
//   var pWordArrL = [];
//   if(chosen.userLetters) {
//     useableLetters = useableLetters.concat(letters);
//   }

//   for(var i = 0; i < 6; i++) {
//     pWordArrL.push(useableLetters[randomChoice(useableLetters.length)])
//   }

// return pWordArrL.join("");
// }




// Numeric character type
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// function pWordNumbers() {
//   var userNumbers = confirm("Would you like numbers in your password?");
//   var ranNumbers = {
//     userNumbers: userNumbers
//   };
//   return ranNumbers;
// }

// function randomChoice(length) {
//   var randomChars = Math.floor(Math.random() * length);
//   return randomChars;
// }

// function generatePassword() {
//     var chosen = pWordLetters(); pWordNumbers();
//     var useableNums = [];
//     var pWordArr = [];

//     if(chosen.userNumbers) {
//       useableNums = useableNums.concat(numbers);
//     }
//     if(chosen.userLetters) {
//       useableNums = useableNums.concat(letters);
//     }
//     // if(chosen.) {
//     //   useableNums = useableNums.concat(numbers[]: letters[]);
//     // }

//     for(var i = 0; i < pLength; i++) {
//       pWordArr.push(useableNums[randomChoice(useableNums.length)])
//     }
//   return pWordArr.join("")
// }




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passWordText = document.querySelector("#password");

//   passWordText.value = password;

// }

// // Added event listener to generate a button
// generateBtn.addEventListener("click", writePassword);