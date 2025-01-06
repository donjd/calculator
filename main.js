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
let stringOfDigits = "";
const formatter = new Intl.NumberFormat("en-us");
let numberWithCommas = "";

let operand = 0;
let operator = "";
let result = 0;

let isFirstInput = true;

numBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    appendDigit(e);
    convertToNumber(e);
    displayNumberWithCommas(e);
  })
);

function appendDigit(e) {
  stringOfDigits += e.target.textContent;
}

function convertToNumber() {
  operand = parseFloat(stringOfDigits);
}

function displayNumberWithCommas() {
  numberWithCommas = formatter.format(stringOfDigits);
  display.textContent = numberWithCommas;
}

operatorBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    operator = e.target.textContent;
    calculateResult();
    // displayHistory(e);
    isFirstInput = false;
  })
);

function calculateResult() {
  switch (operator) {
    case "+":
      if (isFirstInput) {
        result = operand;
        resetOperand();
        result = result + operand;
      } else {
        result = result + operand;
        resetOperand();
      }

      break;
  }
}

function resetOperand() {
  stringOfDigits = "";
  operand = 0;
  numberWithCommas = "";
}

function displayHistory(e) {
  if (isFirstInput) {
    history.textContent = `${operand} ${operator}`;
  } else {
    history.textContent = `${result} ${operator}`;
  }
}

equal.addEventListener("click", () => {
  calculateResult();
  history.textContent = result;
  display.textContent = result;
});

clearBtn.addEventListener("click", (e) => {
  isFirstInput = true;
  stringOfDigits = "";
  numberWithCommas = "";
  operand = 0;
  operator = "";
  result = 0;
  display.textContent = 0;
  history.textContent = 0;
});

//functional goals

//display the first input number
//press operator
//display a "history" above the number with the result and then the operator
//also display the result in the main display
//when you type another number, replace the result with the new operand
//

//basicaly, the only difference in hitting an operator and the equals button is how the "history" is displayed
//when you hit equals, the history displays the last two operands and the operator
//if you hit just an operator, it still solves the problem, but only displays the first operand in history and
//the second one in the main diplay

//pseudo code

//input number
//press operator
//save first input number as the result
//

//could try adding a new variable inside of the functions for first operand(result) and operand.
