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

const numBtns = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

//
let operator = "";
let result = 0;

let stringOfNums = "";
let realNums = 0;

const formatter = new Intl.NumberFormat("en-us");
let formattedNum = "";

function displayNumbers(e) {
  stringOfNums += e.target.textContent;
  realNums = parseFloat(stringOfNums);
  formattedNum = formatter.format(realNums);
  display.textContent = formattedNum;
}

function displayHistory(e) {
  history.textContent = `${formattedNum} ${e.target.textContent}`;
}

numBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    displayNumbers(e);
  })
);

operatorBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    displayHistory(e);
  })
);

//symbol buttons
divideBtn.addEventListener("click", (e) => {
  operator = "÷";
  history.textContent = `${formattedNum} ${e.target.textContent}`;
});
multiplyBtn.addEventListener("click", (e) => {
  operator = "x";
  history.textContent = `${formattedNum} ${e.target.textContent}`;
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
    case "÷":
      return (result = firstNum / secondNum);
      break;
    case "x":
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
