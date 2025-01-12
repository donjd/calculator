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
      }
      resetOperand();
      displayHistory();
      isFirstInput = false;
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
      for (i = 1; i < operand; i++) {}
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

//firstInput = true
//result = 0
//operand = 0
//operator = ""

//if firstInput is true
//    press 5
//    operand = 5
//    press +
//    operator = +
//    result = 5
//    operand = 0
//    display result and operator in history (5 +)
//    firstInput = false

//press 6
//operand = 6
//press -
//calculate result (5 + 6)
//result = 11
//display result (11)
//operator = -
//display result and operator in history (11 -)

//press 2
//operand = 2
//press x
//calculate result (11 - 2)
//result = 9
//display result (9)
//operator = x
//display result and operator in history (9 x)

//press 10
//operand = 10
//press =
//display result, operator, and operand (9 x 10 =) in history
//calculate new result (90)
//result = 90
//display result (30)

//press 5
//operand = 5
//press +

//if firstInput is true
//    operator = +
//    result = 5
//    operand = 0
//    display result and operator in history (5 +)
//    firstInput = false

//press 6
//operand = 6
//press -   ----------------------- This is key. You don't want to set the operator until you calculate the previous expression.
//calculate result (5 + 6)
//result = 11
//display result (11)
//operator = -
//display result and operator in history (11 -)

//press 2
//operand = 2
//press x
//calculate result (11 - 2)
//result = 9
//display result (9)
//operator = x
//display result and operator in history (9 x)

//press 10
//operand = 10
//press =
//display result, operator, and operand (9 x 10 =) in history
//calculate new result (90)
//result = 90
//display result (30)

//known issues
// - pressing an operator multiple times in a row changes the operand to 0.
//   this isn't noticable with plus or minus since +/- 0 is still the same number.
//   problem becomes clear when using division or multiplication.
// - switching operators from a regular operator to equals doesn't work because the operand is now 0
// using the decimal somehow removes the operand
// using the result from pressing equal after multiplication or division in a new equation doesn't work
// becasue when you hit equals, it sets the operand to 0. When you then take the result and hit +, it calculates the previous expression again
// which is now result x 0.
// the goal is to not let this happen because once you hit equals, there is no "previous equation" o calculate.
// once you hit equals (pressedEquals) you shouldn't calculate on the next operator click.
