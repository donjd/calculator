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
let operandWithCommas = "";
let resultWithCommas = "";

let operand = 0;
let operator = "";
let result = 0;

let isFirstInput = true;

numBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    appendDigit(e);
    convertToNumber(e);
    displayNumberWithCommas(stringOfDigits);
  })
);

function appendDigit(e) {
  stringOfDigits += e.target.textContent;
}

function convertToNumber() {
  operand = parseFloat(stringOfDigits);
}

function displayNumberWithCommas(number) {
  let numberWithCommas = formatter.format(number);
  display.textContent = numberWithCommas;
  return numberWithCommas;
}

operatorBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    operator = e.target.textContent;
    calculateResult();
    displayHistory();
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
}

function displayHistory() {
  resultWithCommas = displayNumberWithCommas(result);
  history.textContent = `${resultWithCommas} ${operator}`;
}

equal.addEventListener("click", () => {
  resultWithCommas = displayNumberWithCommas(result);
  operandWithCommas = displayNumberWithCommas(operand);
  history.textContent = `${resultWithCommas} ${operator} ${operandWithCommas} =`;
  calculateResult();
  resultWithCommas = displayNumberWithCommas(result);
  display.textContent = resultWithCommas;
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
