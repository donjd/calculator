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
let stringOfNums = "";
const formatter = new Intl.NumberFormat("en-us");
let displayNumber = "";

let operand = 0;
let operator = "";
let result = 0;

let isFirstInput = true;

function displayNumbers(e) {
  stringOfNums += e.target.textContent;
  operand = parseFloat(stringOfNums);
  displayNumber = formatter.format(operand);
  display.textContent = displayNumber;
}

function displayHistory(e) {
  if (isFirstInput) {
    history.textContent = `${operand} ${operator}`;
  } else {
    history.textContent = `${result} ${operator}`;
  }
}

numBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    displayNumbers(e);
  })
);

operatorBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    operator = e.target.textContent;
    calculateResult();
    displayHistory(e);
    isFirstInput = false;
  })
);

function calculateResult() {
  switch (operator) {
    case "÷":
      result = result / operand;
      break;
    case "x":
      result = result * operand;
      break;
    case "-":
      if (isFirstInput) {
        result = operand;
        displayNumber = result;
        stringOfNums = "";
      } else {
        result = result - operand;
        displayNumber = result;
        stringOfNums = "";
      }
      break;
    case "+":
      result = result + operand;
      display.textContent = result;
      stringOfNums = "";
      break;
  }
}

clearBtn.addEventListener("click", (e) => {
  isFirstInput = true;
  stringOfNums = "";
  displayNumber = "";
  operand = 0;
  operator = "";
  result = 0;
  display.textContent = 0;
  history.textContent = 0;
});

equal.addEventListener("click", () => {
  calculateResult();
  history.textContent = 0;
  display.textContent = result;
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
