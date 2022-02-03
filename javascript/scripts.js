//vars for display value
//vars to hold numbers
let historyValue = ""; //top value
let displayValue = ""; //bottom value
let numberOne = "";
let numberTwo = "";
let currentValue = "";
let operand = "";

const lowerDisplay = document.querySelector("#lowerDisplay");
const upperDisplay = document.querySelector("#upperDisplay");
const numberButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".oper");
const clear = document.querySelector(".clear");

clear.addEventListener("click", reset);

numberButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (displayValue === "") {
      displayValue = e.target.innerText;
      updateDisplay();
      updateHistory();
    } else {
      displayValue = displayValue + e.target.innerText;
      updateDisplay();
      updateHistory();
    }
    console.log(e.target.innerText);
  });
});

operButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (displayValue === "") {
      return;
    } else {
      displayValue = displayValue + " " + e.target.innerText + " ";
      updateDisplay();
      updateHistory();
    }
    console.log(e.target.innerText);
  });
});

// window.addEventListener("keydown", function (e) {
//   const button = document.querySelector(`button[data-key="${e.keycode}"]`);
//   console.log(button);
//   // if(!button) return;
// });

function pushNumberOne() {
  numberOne = displayValue;
}

function pushNumberTwo() {
  numberTwo = displayValue;
}

function updateDisplay() {
  lowerDisplay.innerText = displayValue;
}

function updateHistory() {
  upperDisplay.innerText = historyValue;
}

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function reset() {
  let displayValue = 0;
  let historyValue = 0;
  let numberOne = "";
  let numberTwo = "";
  let currentValue = "";
  let operand = "";
  updateDisplay();
  updateHistory();
}

function operate(operand, numberOne, numberTwo) {
  if (operand === "+") {
    add(numberOne, numberTwo);
  } else if (operand === "-") {
    subtract(numberOne, numberTwo);
  } else if (operand === "*") {
    multiply(numberOne, numberTwo);
  } else if (operand === "/") {
    divide(numberOne, numberTwo);
  }
}
