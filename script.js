const calculations = document.getElementById("calculations");
const screen = document.getElementById("screen");
const operations = document.getElementById("operations");
const clearBtn = document.getElementById("clear-btn");

let firstNum;
let secondNum;
let opSign;
let empty = false;

function writeNum(num) {
  if (empty) {
    firstNum = 0;
    secondNum = 0;
    screen.innerText = "";
    calculations.innerText = "";
    empty = false;
  }
  screen.innerText += num;
}

function operation(value) {
  if (calculations.innerText !== "") {
    calculate();
  } else {
    calculations.innerText = screen.innerText;
    firstNum = Number(screen.innerText);
  }
  screen.innerText = "";
  if (value === 1) {
    opSign = "+";
    calculations.innerText += " +";
  } else if (value === 2) {
    opSign = "-";
    calculations.innerText += " -";
  } else if (value === 3) {
    opSign = "*";
    calculations.innerText += " *";
  } else {
    opSign = "/";
    calculations.innerText += " /";
  }
}

function calculate() {
  secondNum = Number(screen.innerText);
  let result;
  if (opSign === "+") {
    result = firstNum + secondNum;
  } else if (opSign === "-") {
    result = firstNum - secondNum;
  } else if (opSign === "*") {
    result = firstNum * secondNum;
  } else {
    result = firstNum / secondNum;
  }
  calculations.innerText = result;
  operations.innerHTML += `<p class="operation">${firstNum}${opSign}${secondNum}=${result}`;
  firstNum = result;
}

function equal() {
  calculate();
  screen.innerText = calculations.innerText;
  calculations.innerText += " =";
  empty = true;
}

function clear() {
  console.log("working as expected");
  operations.innerHTML = "";
  screen.innerText = "";
  calculations.innerText = "";
  empty = false;
  firstNum = 0;
  secondNum = 0;
}

clearBtn.addEventListener("click", clear);
