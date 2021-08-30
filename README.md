# Password Generator

This password generator allows the user to:
* Create a password with a length between 8-128
* Have Lowercase characters `abcdefghijklmnopqrstuvwxyz`
* Have Uppercase characters `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
* Have Numeric characters `0123456789`
* Have Special characters `!#$%&'()*+,-./:;<=>?@[\]^_``{|}~`



## Password Length
When the 'Generate Password' button is pressed then `passwordLengthCheck()` displays a prompt asking the user to enter a length between 8 - 128. 

![Image of password Length Prompt](/assets/readme-images/pwLength.png)

### Password Length Error
If the user selects a number that is not between 8-128 then an error alert is given and the function `passwordLengthCheck()` is returned, causing the function to start over. 

![Image of password length error prompt](/assets/readme-images/invalidLength.png)



## Character Selection
After the user has selected a valid password length then `acceptableCharacters()` displays a series of prompts that ask the user if the password should contain lowercase, uppercase, numeric and special characters. Once the user selects the characters they would like in the password the function returns a string of characters that were added together. 


### No Character Options Selected
To prevent error when the user decides not to select at least one character option I created ` if (lowercase || uppercase || numeric || special)` to determine if character option was selected. If they don't select at least one they will recieve an alert telling them they must select at least one and `aceptableCharacters()` is returned.

![Image of character error](/assets/readme-images/characterError.png)



## Password Generation
Once the user has gone through all the prompts `generatePassword()` runs a for loop for the length of the password length given and creates a password based on the character options by selecting a random character in the string given. 


### Example of Generator
Below is a password that has a 25 length and uses all 4 character options

![Generated password](/assets/readme-images/example.png)

## Test out the demo!
https://doug-coder64.github.io/password-generator/
