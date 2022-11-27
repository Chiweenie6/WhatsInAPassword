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



// let myNewPassword = prompt("What is your new password?");

// if (myNewPassword.length < 8) {
//   alert("Your new password is too short.");
// } else if (myNewPassword.length > 128){
//   alert("Your new password is too long.")
// } else {
//   prompt()
// }

// function generatePassword(){
//   var myNewPassword = "",
  
  // confirm()
  // alert()
  // prompt()
  
  // parseInt()
  
  // Math.floor(math.random() * Array.length)
  
  //   return
  // }
  
// sign = window.prompt("hello");






// Password length criteria
generateBtn.addEventListener("click", pWordLength);

function pWordLength() {
  let userPLength = window.prompt("How long do you want your password to be?");
  if (userPLength < 8) {
    alert("Your password is too short, length must be between 8 and 128 characters.");
    if (userPLength < 8) pWordLength();
    // pWordLength.addEventListener("close", pWordLength);
  } else if (userPLength > 128) {
    alert("Your password is too long, length must be between 8 and 128 characters.");
    if (userPLength > 128) pWordLength();
  } else {
    // return pWordLength;
  }; return pWordLength;
}
var userPLength = pWordLength;


// Alphabet Criteria
generateBtn.addEventListener("click", pWordLetters);

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function pWordLetters() {
  var userLetters = confirm("Would you like letters in your password?");
  var ranLetters = {
    userLetters: userLetters
  };
  return ranLetters;
}

function randomChoice(length) {
  var randomChars = Math.floor(Math.random() * length);
  return randomChars;
}

function generatePassword() {
  var chosen = pWordLetters();
  var useableLetters = [];
  var pWordArrL = [];
  if(chosen.userLetters) {
    useableLetters = useableLetters.concat(letters);
  }

  for(var i = 0; i < 6; i++) {
    pWordArrL.push(useableLetters[randomChoice(useableLetters.length)])
  }

return pWordArrL.join("");
}




// Numeric character type
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function pWordNumbers() {
  var userNumbers = confirm("Would you like numbers in your password?");
  var ranNumbers = {
    userNumbers: userNumbers
  };
  return ranNumbers;
}

function randomChoice(length) {
  var randomChars = Math.floor(Math.random() * length);
  return randomChars;
}

function generatePassword() {
    var chosen = pWordNumbers();
    var useableNums = [];
    var pWordArr = [];
    if(chosen.userNumbers) {
      useableNums = useableNums.concat(numbers);
    }

    for(var i = 0; i < 5; i++) {
      pWordArr.push(useableNums[randomChoice(useableNums.length)])
    }


  return pWordArr.join("")
}




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