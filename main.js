//display
const history = document.querySelector("#input-history");
const display = document.querySelector("#display");

//row one buttons
const leftParenthesis = document.querySelector("#left-parenthesis-btn");
const rigthParenthesis = document.querySelector("#right-parenthesis-btn");
const power = document.querySelector("#power-btn");
const clearBtn = document.querySelector("#clear-btn");

//row two buttons
const seven = document.querySelector("#seven-btn");
const eight = document.querySelector("#eight-btn");
const nine = document.querySelector("#nine-btn");
const divideBtn = document.querySelector("#divide-btn");

//row three buttons
const four = document.querySelector("#four-btn");
const five = document.querySelector("#five-btn");
const six = document.querySelector("#six-btn");
const multiplyBtn = document.querySelector("#multiply-btn");

//row four buttons
const one = document.querySelector("#one-btn");
const two = document.querySelector("#two-btn");
const three = document.querySelector("#three-btn");
const minusBtn = document.querySelector("#minus-btn");

//row five buttons
const decimal = document.querySelector("#decimal-btn");
const zero = document.querySelector("#zero-btn");
const equal = document.querySelector("#equal-btn");
const plusBtn = document.querySelector("#plus-btn");

//
const input = [];
let inputDisplay = "";
let operator = "";
let result = 0;

//number buttons
one.addEventListener("click", (e) => {
  input.push(1);
  inputDisplay += "1";
  display.textContent = inputDisplay;
});
two.addEventListener("click", (e) => {
  input.push(2);
  inputDisplay += "2";
  display.textContent = inputDisplay;
});
three.addEventListener("click", (e) => {
  input.push(3);
  inputDisplay += "3";
  display.textContent = inputDisplay;
});
four.addEventListener("click", (e) => {
  input.push(4);
  inputDisplay += "4";
  display.textContent = inputDisplay;
});
five.addEventListener("click", (e) => {
  input.push(5);
  inputDisplay += "5";
  display.textContent = inputDisplay;
});
six.addEventListener("click", (e) => {
  input.push(6);
  inputDisplay += "6";
  display.textContent = inputDisplay;
});
seven.addEventListener("click", (e) => {
  input.push(7);
  inputDisplay += "7";
  display.textContent = inputDisplay;
});
eight.addEventListener("click", (e) => {
  input.push(8);
  inputDisplay += "8";
  display.textContent = inputDisplay;
});
nine.addEventListener("click", (e) => {
  input.push(9);
  inputDisplay += "9";
  display.textContent = inputDisplay;
});

//symbol buttons
divideBtn.addEventListener("click", () => {
  history.textContent = `${inputDisplay} +`;
  inputDisplay = 0;
  display.textContent = inputDisplay;
  operator = "/";
});
multiplyBtn.addEventListener("click", () => {
  history.textContent = `${inputDisplay} x`;
  inputDisplay = 0;
  display.textContent = inputDisplay;
  operator = "*";
});
minusBtn.addEventListener("click", () => {
  history.textContent = `${inputDisplay} -`;
  inputDisplay = 0;
  display.textContent = inputDisplay;
  operator = "-";
});
plusBtn.addEventListener("click", () => {
  history.textContent = `${inputDisplay} +`;
  inputDisplay = 0;
  display.textContent = inputDisplay;
  operator = "+";
});
equal.addEventListener("click", () => {
  calculateResult(5, 6);
  display.textContent = result;
});

function calculateResult(firstNum, secondNum) {
  switch (operator) {
    case "/":
      return (result = firstNum / secondNum);
      break;
    case "*":
      return (result = firstNum * secondNum);
      break;
    case "-":
      return (result = firstNum - secondNum);
      break;
    case "+":
      return (result = firstNum + secondNum);
      break;
  }
}

calculateResult(5, 6);

const nums = ["1", "2", "3"];
let numsResult = 0;
const numsTogether = nums.reduce((acc, curr) => {
  return (acc += curr);
});
