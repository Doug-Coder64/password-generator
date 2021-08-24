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

 const characters = acceptableChracters();
 console.log(characters[0]);
 console.log(characters[1]);
 console.log(characters[2]);
 console.log(characters[3]);

 return true;
}

// Adds prompt to ask length of password and checks to see if it matches 8 - 128
function passwordLengthCheck() {
 const length = parseInt(window.prompt("Please Enter Desired Password Length"));
 
  //this recursive if statement checks to see if it matches 8 - 128, if not it reruns function by returning passwordLengthCheck()
  if (length >= 8 && length <= 128) { 
    return length;
  }else {
    window.alert("Password Length is invalid, please try again.");
    return passwordLengthCheck();   
  }
}

// Adds prompt to ask what characters can be used
function acceptableChracters () {
  const lowercase = window.confirm("Do you want password to have lowercase?");
  const uppercase = window.confirm("Do you want password to have uppercase?");
  const numeric = window.confirm("Do you want password to have numerics?");
  const special = window.confirm("Do you want password to have special characters");
  
  return [lowercase,uppercase, numeric, special]; //returns an array with true and false values depending on what was selected for each question.
}

