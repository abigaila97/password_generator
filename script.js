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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
