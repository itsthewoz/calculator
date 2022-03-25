let operand = "";
let nOne = "";
let nTwo = "";

const numberButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".oper");

numberButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (nOne === "" || nOne === "0") {
      if (e.target.innerText !== "0") {
        nOne = e.target.innerText;
        updateDisplay();
      }
    } else {
      nOne += e.target.innerText;
      updateDisplay();
    }
  });
});

operButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (
      e.target.innerText === "-" &&
      !Array.from(nOne).includes("-") &&
      nOne === ""
    ) {
      nOne = "-" + nOne;
      updateDisplay();
    } else if (operand === "" && nOne !== "" && nOne !== "-") {
      setOp(e);
      nTwo = nOne;
      nOne = "";
      updateHistory();
      updateDisplay();
    } else if (operand !== "") {
      operate(nTwo, nOne);
      setOp(e);
      nTwo = nOne;
      nOne = "";
      updateHistory();
      updateDisplay();
    }
  });
});

function updateDisplay() {
  const lowerDisplay = document.querySelector(".displaybot");
  lowerDisplay.innerText = `${nOne}`;
}

function updateHistory() {
  const upperDisplay = document.querySelector(".displaytop");
  if (nTwo !== "" && nOne !== "") {
    upperDisplay.innerText = `${nTwo} ${operand} ${nOne}`;
  } else if (operand !== "") {
    upperDisplay.innerText = `${nTwo} ${operand}`;
  } else {
    upperDisplay.innerText = `${nOne}`;
  }
}

function operate(a, b) {
  let answer = "";
  if (operand === "+") {
    answer = add(a, b);
  } else if (operand === "−") {
    answer = subtract(a, b);
  } else if (operand === "×") {
    answer = multiply(a, b);
  } else {
    answer = divide(a, b);
  }
  nOne = parseFloat(answer.toFixed(4));
  nTwo = "";
  operand = "";
  updateDisplay();
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (nTwo !== "" && nOne !== "") {
    updateHistory();
    operate(nTwo, nOne);
    nOne = "";
  }
});

const deci = document.querySelector("[data-key='.']");
deci.addEventListener("click", () => {
  if (nOne !== "" || nOne !== "0") {
    if (Array.from(nOne).includes(".")) {
      return;
    } else {
      nOne += ".";
      updateDisplay();
    }
  }
});

const perc = document.querySelector("[data-key='%']");
perc.addEventListener("click", () => {
  if (nOne !== "" || nOne !== "0") {
    if (Array.from(nOne).includes("-")) {
      nOne = divide(-nOne, 100);
      nOne = "-" + nOne;
      updateDisplay();
    } else {
      nOne = divide(nOne, 100);
      updateDisplay();
    }
  }
});

const plusmin = document.querySelector("[data-key='999']");
plusmin.addEventListener("click", () => {
  if (nOne !== "" || nOne !== "0") {
    nOne = -nOne;
    updateDisplay();
  }
});

const clear = document.querySelector("[data-key='Delete']");
clear.addEventListener("click", () => {
  nOne = "";
  nTwo = "";
  operand = "";
  updateDisplay();
  updateHistory();
});

const undo = document.querySelector("[data-key='Backspace']");
undo.addEventListener("click", () => {
  if (nOne !== "") {
    popNum();
    updateDisplay();
    updateHistory();
  } else if (nTwo !== "" && operand !== "") {
    popOper();
    nOne = nTwo;
    nTwo = "";
    updateDisplay();
    updateHistory();
  }
});

function popNum() {
  let arrNum = Array.from(nOne);
  arrNum.pop();
  let arrStr = arrNum.toString();
  let finStr = arrStr.replace(/,/g, "");
  nOne = finStr;
}

function popOper() {
  let arrOp = Array.from(operand);
  arrOp.pop();
  let arrStr = arrOp.toString();
  // let finStr = arrStr.replace(/,/g, "");
  operand = arrStr;
}

function setOp(e) {
  operand = e.target.innerText;
}

function keySetOp(butPress) {
  operand = butPress.innerText;
}

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

window.addEventListener("load", () => {
  updateDisplay();
});

//keyboard functions - Fix this function its too long! Bake into old functions or separate.

window.addEventListener("keydown", (e) => {
  const butPress = document.querySelector(`button[data-key="${e.key}"]`);
  if (!butPress) {
    return;
  } else if (butPress.classList.contains("number")) {
    //key input and function to set numbers
    if (nOne === "" || nOne === "0") {
      if (butPress.innerText !== "0") {
        nOne = butPress.innerText;
        updateDisplay();
      }
    } else {
      nOne += butPress.innerText;
      updateDisplay();
    }
  } else if (butPress.classList.contains("oper")) {
    //key input and funtion to set operand
    if (
      butPress.innerText === "-" &&
      !Array.from(nOne).includes("-") &&
      nOne === ""
    ) {
      nOne = "-" + nOne;
      updateDisplay();
    } else if (operand === "" && nOne !== "" && nOne !== "-") {
      keySetOp(butPress);
      nTwo = nOne;
      nOne = "";
      updateHistory();
      updateDisplay();
    } else if (operand !== "") {
      operate(nTwo, nOne);
      keySetOp(butPress);
      nTwo = nOne;
      nOne = "";
      updateHistory();
      updateDisplay();
    }
  }
});

window.addEventListener("keydown", (e) => {
  const butPress = document.querySelector(`button[data-key="${e.key}"]`);
  if (!butPress) {
    return;
  } else if (butPress.classList.contains("backspace")) {
    if (nOne !== "") {
      popNum();
      updateDisplay();
      updateHistory();
    } else if (nTwo !== "" && operand !== "") {
      popOper();
      nOne = nTwo;
      nTwo = "";
      updateDisplay();
      updateHistory();
    }
  }
});

window.addEventListener("keydown", (e) => {
  const butPress = document.querySelector(`button[data-key="${e.key}"]`);
  if (!butPress) {
    return;
  } else if (butPress.classList.contains("equal")) {
    if (nTwo !== "" && nOne !== "") {
      updateHistory();
      operate(nTwo, nOne);
    }
  }
});

window.addEventListener("keydown", (e) => {
  const butPress = document.querySelector(`button[data-key="${e.key}"]`);
  if (!butPress) {
    return;
  } else if (butPress.classList.contains("deci")) {
    if (nOne !== "" || nOne !== "0") {
      if (Array.from(nOne).includes(".")) {
        return;
      } else {
        nOne += ".";
        updateDisplay();
      }
    }
  }
});

window.addEventListener("keydown", (e) => {
  const butPress = document.querySelector(`button[data-key="${e.key}"]`);
  if (!butPress) {
    return;
  } else if (butPress.classList.contains("delete")) {
    nOne = "";
    nTwo = "";
    operand = "";
    updateDisplay();
    updateHistory();
  }
});

window.addEventListener("keydown", (e) => {
  const butPress = document.querySelector(`button[data-key="${e.key}"]`);
  if (!butPress) {
    return;
  } else if (butPress.classList.contains("perc")) {
    if (nOne !== "" || nOne !== "0") {
      if (Array.from(nOne).includes("-")) {
        nOne = divide(-nOne, 100);
        nOne = "-" + nOne;
        updateDisplay();
      } else {
        nOne = divide(nOne, 100);
        updateDisplay();
      }
    }
  }
});
