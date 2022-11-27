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
  


var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function pWordRules() {
  var userNumbers = confirm("Do you want numbers in your password?");
  var possible = {
    userNumbers: userNumbers
  };
  return possible;
}

function randomChoice(length) {
  var randomNumber = Math.floor(Math.random() * length);
  return randomNumber;
}

function makePWord() {
    var chosen = pWordRules();
    var useableChars = [];
    var pWordArr = [];
    if(chosen.userNumbers) {
      useableChars = useableChars.concat(numbers);
    }

    for(var i = 0; i < 6; i++) {
      pWordArr.push(useableChars[randomChoice(useableChars.length)])
    }


  return pWordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passWordText = document.querySelector("#password");

  passWordText.value = password;

}

// Added event listener to generate a button
makeBtn.addEventListener("click", writePassword);