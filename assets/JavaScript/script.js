// Assignment Code
let generateBtn = document.querySelector("#generate");

//Gives us a reference to the character options
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericCharacters = "0123456789";
const specialCharacters = "";


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generates password after other functions collect password criteria
function generatePassword() {
 const passwordLength = passwordLengthCheck();
 const passwordCharacters = acceptableChracters();
 let password = "";

  //for loop to add characters to password
  for(let i = 0; i < passwordLength; i++){

      //
      password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
 return password;
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

// Adds prompt to ask what characters can be used and returns acceptable chracters
function acceptableChracters () {
  const lowercase = window.confirm("Do you want password to have lowercase?");
  const uppercase = window.confirm("Do you want password to have uppercase?");
  const numeric = window.confirm("Do you want password to have numerics?");
  const special = window.confirm("Do you want password to have special characters");

  let characters = "";

  // if or statement that checks to see if at least 1 character option is selected
  if (lowercase || uppercase || numeric || special) {

    // if lowercase is allowed then we will add lowercaseCharacters to charcters string
    if (lowercase) {
      characters = characters + lowercaseCharacters;
    }

    // if uppercase is allowed then we will add uppercaseCharacters to charcters string
    if (uppercase) {
      characters = characters + uppercaseCharacters;
    }

    // if numeric is allowed then we will add numericCharacters to charcters string
    if (numeric) {
      characters = characters + numericCharacters;
    }

    // if special is allowed then we will add specialCharacters to charcters string
    if (special) {
      characters += specialCharacters;
    }
  }else{

    // if no charater set is selected then alert will be prompted and acceptableCharacter() will be re reran to confirm what characters to use.
    window.alert("Please select at least one character option");
    return acceptableChracters();
  }

  // reurns characters string with all characters the user allows
  return (characters);
}
