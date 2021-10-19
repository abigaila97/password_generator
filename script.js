// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCodes = arraylowtohigh(65, 90);
var lowercaseCodes = arraylowtohigh(97, 122);
var numberCodes = arraylowtohigh(48, 57);
var symbolCodes = arraylowtohigh(33, 47).concat(
  arraylowtohigh(58,64)
).concat(
  arraylowtohigh(91, 96)
).concat(
  arraylowtohigh(123, 126)
);

function arraylowtohigh (low, high) {
  var array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}
function passwordRequirements() {
  var length = parseInt(
    prompt('How many characters shall your password contain?')
  );

  if (length < 8) {
    alert('Password lenghth requires a minimum of 8 characters!');
    return null;
  }

  if (length >128) {
    alert('Password length must be at maximum of 128 chracters!');
    return null;
  }

  var uppercaseCharacters = confirm('Do you confirm to add uppercase character? Click OK to accept.');

  var lowercaseCharacters = confirm('Do you confirm to add lowercase characters? Click OK to accept');

  var numberCharacter = confirm('Do you confirm to add numbers? Click OK to accept');

  var specialCharacters = confirm('Do you confirm to add special characters? Click OK to accept');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
