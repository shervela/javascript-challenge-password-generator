// Assignment code here
let characterLength = 8;
let choiceArr = [];

let chooseLowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let chooseUppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let chooseNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let chooseSpecialCharacter = [
  "@",
  "%",
  "+",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  "/",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

let generateBtn = document.querySelector("#generate");

// Get references to the #generate element

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let correctPrompts = getPrompts(); //either true or false
  let passwordText = document.querySelector("#password");

  if (correctPrompts) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}

function generatePassword() {
  //I would generatePassword based on prompts
  var password = "";
  //for loop
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(
    prompt(
      "How long would you like your password to be? Choose a length of at least 8 characters and no more than 128 characters."
    )
  );

  //NaN = not a number
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number from 8 to 128 digits.  Please try again."
    );
    return false;
  }

  if (
    confirm("Do you want to include lowercase characters in your password?")
  ) {
    choiceArr = choiceArr.concat(chooseLowercase);
  }

  if (
    confirm("Do you want to include uppercase characters in your password?")
  ) {
    choiceArr = choiceArr.concat(chooseUppercase);
  }
  if (confirm("Do you want to include numeric characters in your password?")) {
    choiceArr = choiceArr.concat(chooseNumeric);
  }
  if (confirm("Do you want to include special characters in your password?")) {
    choiceArr = choiceArr.concat(chooseSpecialCharacter);
  }
  return true;
}
