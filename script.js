const calculations = document.getElementById("calculations");
const screen = document.getElementById("screen");
const operations = document.getElementById("operations");
const clearBtn = document.getElementById("clear-btn");

let firstNum;
let secondNum;
let opSign;
let empty = true;
let ongoingOp = false;

function writeNum(num) {
  if (empty) {
    firstNum = "";
    secondNum = "";
    screen.innerText = "";
    calculations.innerText = "";
    empty = false;
  }
  screen.innerText += num;
}

function operation(value) {
  if (empty) {
    return;
  }
  if (calculations.innerText !== "" && screen.innerText !== "") {
    calculate();
  } else if (!ongoingOp) {
    calculations.innerText = screen.innerText;
    firstNum = Number(screen.innerText);
  } else {
    let newOpSign;
    if (value === 1) {
      newOpSign = "+";
    } else if (value === 2) {
      newOpSign = "-";
    } else if (value === 3) {
      newOpSign = "*";
    } else {
      newOpSign = "/";
    }
    opSign = newOpSign;
    calculations.innerText = replaceOp(calculations.innerText, opSign);
    return;
  }
  screen.innerText = "";
  if (value === 1) {
    opSign = "+";
    calculations.innerText += " +";
    ongoingOp = true;
  } else if (value === 2) {
    opSign = "-";
    calculations.innerText += " -";
    ongoingOp = true;
  } else if (value === 3) {
    opSign = "*";
    calculations.innerText += " *";
    ongoingOp = true;
  } else if (value === 4) {
    opSign = "/";
    calculations.innerText += " /";
    ongoingOp = true;
  } else {
    return;
  }
}

function replaceOp(str, sign) {
  newStr = str.slice(0, str.length - 1);
  newStr += sign;
  return newStr;
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
  } else if (opSign === "/") {
    result = firstNum / secondNum;
  } else {
    return;
  }
  calculations.innerText = result;
  operations.innerHTML += `<p class="operation">${firstNum}${opSign}${secondNum}=${result}`;
  firstNum = result;
  secondNum = "";
  ongoingOp = false;
}

function equal() {
  if (empty) {
    return;
  } else if (calculations.innerText === "") {
    calculations.innerText = screen.innerText;
  } else {
    calculate();
  }
  screen.innerText = calculations.innerText;
  calculations.innerText += " =";
  empty = true;
  opSign = "";
  ongoingOp = false;
}

function clear() {
  operations.innerHTML = "";
  screen.innerText = "";
  calculations.innerText = "";
  empty = true;
  firstNum = "";
  secondNum = "";
  opSign = "";
  ongoingOp = false;
}

clearBtn.addEventListener("click", clear);
