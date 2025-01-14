//display
const history = document.querySelector("#input-history");
const display = document.querySelector("#display");

//row one buttons
const delBtn = document.querySelector("#delete-btn");
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
let pressedEqual = false;

numBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    appendDigit(e);
    convertToNumber(e);
    display.textContent = displayNumberWithCommas(stringOfDigits);
  })
);

operatorBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    if (isFirstInput) {
      operator = e.target.textContent;
      if (!pressedEqual) {
        result = operand;
        resetOperand();
      }
      displayHistory();
      isFirstInput = false;
      pressedEqual = false;
    } else {
      calculateResult();
      operator = e.target.textContent;
      displayHistory();
      display.textContent = displayNumberWithCommas(result);
      isFirstInput = false;
    }
  })
);

function appendDigit(e) {
  stringOfDigits += e.target.textContent;
}

function convertToNumber() {
  operand = parseFloat(stringOfDigits);
}

function displayNumberWithCommas(number) {
  return formatter.format(number);
}

function calculateResult() {
  pressedEqual = false;
  switch (operator) {
    case "+":
      result = result + operand;
      break;
    case "-":
      result = result - operand;
      break;
    case "x":
      result = result * operand;
      break;
    case "÷":
      result = result / operand;
      break;
    case "^":
      let exponentOperand = result;
      for (i = 1; i < operand; i++) {
        result *= exponentOperand;
      }
  }
  resetOperand();
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
  if (pressedEqual) {
  } else {
    resultWithCommas = displayNumberWithCommas(result);
    operandWithCommas = displayNumberWithCommas(operand);
    history.textContent = `${resultWithCommas} ${operator} ${operandWithCommas} =`;
    calculateResult();
    resultWithCommas = displayNumberWithCommas(result);
    display.textContent = resultWithCommas;
    pressedEqual = true;
    isFirstInput = true;
    operator = "";
  }
});

clearBtn.addEventListener("click", () => {
  isFirstInput = true;
  stringOfDigits = "";
  numberWithCommas = "";
  operand = 0;
  operator = "";
  result = 0;
  display.textContent = 0;
  history.textContent = 0;
  pressedEqual = false;
});

delBtn.addEventListener("click", () => {
  stringOfDigits = stringOfDigits.slice(0, -1);
  if (stringOfDigits == "") {
    stringOfDigits = "0";
  }
  convertToNumber();
  display.textContent = displayNumberWithCommas(stringOfDigits);
});