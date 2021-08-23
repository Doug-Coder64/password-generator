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

//Generates password after other functions collect password criteria
function generatePassword() {
 const passwordLength = passwordLengthCheck();
 console.log(passwordLength);
 return true;
}

// Adds prompt to ask length of password and checks to see if it matches 8 - 128
function passwordLengthCheck() {
 const length = parseInt(window.prompt("Please Enter Desired Password Length"));
 
  if (length >= 8 && length <= 128) {
    return length;
  }else {
    window.alert("Password Length is invalid, please try again.");
    return passwordLengthCheck();
  }
}

