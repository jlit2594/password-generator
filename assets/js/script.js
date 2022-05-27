// Assignment code here
var lengthEl = document.getElementById('length')
var upperEl = document.getElementById('upper');
var lowerEl = document.getElementById('lower');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateBtn = document.querySelector("#generate");

var length = +lengthEl.value;
var hasLower = lowerEl.checked;
var hasUpper = upperEl.checked;
var hasNumbers = numbersEl.checked;
var hasSymbols = symbolsEl.checked;

function generatePassword(length, upper, lower, numbers, symbols) {
  var generatedPassword = '';

  var typesCount = lower + upper + numbers + symbols;

  var typesArr = ['lower', 'upper', 'numbers', 'symbols'].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }

  for(let i=0; i<length; i++) {
		typesArr.forEach(type => {
			generatedPassword += [getLower(), getUpper(), getNumber(), getSymbol()];
		});
	}

  var finalResult = generatedPassword.slice(0, length);
  return finalResult;
}

function getLower () {
  if (lowerEl.checked) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}}

function getUpper () {
  if (upperEl.checked) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}}

function getNumber () {
  if (numbersEl.checked) {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}}

function getSymbol () {
  if (symbolsEl.checked) {
  var symbols = '!@#$%^&*(){}[]+<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}}

function writePassword () {
  var password = generatePassword(length, hasUpper, hasLower, hasNumbers, hasSymbols);
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)