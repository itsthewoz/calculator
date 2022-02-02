//vars for display value
//vars to hold numbers
let displayValue = "";
let numberOne = "";
let numberTwo = "";
let currentValue = "";
let operand = "";

//const for button listeners and to grab/push value from the display
const buttons = document.querySelectorAll("button");
// buttons.addEventListener("click", () => {
//   let operand = buttons;          //this is most likely wrong. Needs to set operand === clicked value. Most likely using e?
// });

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

function clear() {
  let displayValue = 0;
  let numberOne = "";
  let numberTwo = "";
  let currentValue = "";
  let operand = "";
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

//add function
//subtract function
//multiply function
//divide function
//operate function that takes an operator and 2 numbers and calls an above function
//clear function
