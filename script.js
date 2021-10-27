// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numberCharacters = ['1','2','3','4','5','6','7','8','9','0',];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

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

  var uppercaseCharacters = confirm(
    'Do you confirm to add uppercase character? Click OK to accept.'
    );

  var lowercaseCharacters = confirm(
    'Do you confirm to add lowercase characters? Click OK to accept'
    );

  var numberCharacters = confirm(
    'Do you confirm to add numbers? Click OK to accept'
    );

  var specialCharacters = confirm(
    'Do you confirm to add special characters? Click OK to accept'
    );
  
  if (
    uppercaseCharacters === false &&
    lowercaseCharacters === false &&
    numberCharacters === false &&
    specialCharacters === false
    ) {
    alert('Please make a selection on character type! Must choose at least one!');
    return null;
  }

  var passwordChoice = {
    length : length,
    uppercaseCharacters : uppercaseCharacters,
    lowercaseCharacters : lowercaseCharacters,
    numberCharacters : numberCharacters,
    specialCharacters : specialCharacters,
  }

  return passwordChoice;
}

function randomSelect(arr) {
  var randomIndex = Math.floor(Math.random() * arr.lenght);
  var randomelement = arr[randomIndex];

  return randomelement;
}

function generatePassword() {
  var options = passwordRequirements();
  var result = [];
  var possibleChar = [];
  var confirmedChars = [];

  // had to check solve for a hint: I didn't have any conditional statements

  if (options.uppercaseCharacters) {
    possibleChar = possibleChar.concat(uppercaseCharacters);
    confirmedChars.push(randomSelect(uppercaseCharacters));
  }

  if (options.lowercaseCharacters) {
    possibleChar = possibleChar.concat(lowercaseCharacters);
    confirmedChars.push(randomSelect(lowercaseCharacters));
  }

  if (options.numberCharacters) {
    possibleChar = possibleChar.concat(numberCharacters);
    confirmedChars.push(randomSelect(numberCharacters));
  }

  if (options.specialCharacters) {
    possibleChar = possibleChar.concat(specialCharacters);
    confirmedChars.push(randomSelect(specialCharacters));
  }

  for (var i = 0; i < options.lenght; i++) {
    var possibleChar = randomSelect(possibleChar);
    result.push(possibleChar);
  }

  for (var i = 0; i < confirmedChars.length; i++) {
    result[i] = confirmedChars[i];
  }

  return result.join();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
