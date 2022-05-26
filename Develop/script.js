// Assignment code here
var generatePassword = function () {
  const length = lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  console.log(length);
}
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const passwordFunc = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};

function getLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol () {
  const symbols = '!@#$%^&*(){}[]+<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
