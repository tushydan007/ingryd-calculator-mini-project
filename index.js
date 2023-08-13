const displayElement = document.getElementById("display");

let currentInputAsString = "";
let currentOperator = "";
let previousInputAsString = "";
let iClearDisplay = false;

function clearDisplay() {
  currentInputAsString = "";
  currentOperator = "";
  previousInputAsString = "";
  iClearDisplay = false;
  displayElement.textContent = currentInputAsString || "0";
}

function appendNumber(number) {
  if (iClearDisplay) {
    currentInputAsString = "";
    iClearDisplay = false;
  }
  currentInputAsString += number;
  displayElement.textContent = currentInputAsString || "0";
}

function appendOperator(operator) {
  if (currentOperator !== "") {
    calculate();
  }
  currentOperator = operator;
  previousInputAsString = currentInputAsString;
  currentInputAsString = "";
}

function calculate() {
  const num1 = parseFloat(previousInputAsString);
  const num2 = parseFloat(currentInputAsString);
  if (currentOperator === "+") {
    currentInputAsString = (num1 + num2).toString();
  } else if (currentOperator === "-") {
    currentInputAsString = (num1 - num2).toString();
  } else if (currentOperator === "x") {
    currentInputAsString = (num1 * num2).toString();
  } else if (currentOperator === "/") {
    currentInputAsString = (num1 / num2).toString();
  }
  iClearDisplay = true;
  currentOperator = "";
  displayElement.textContent = currentInputAsString || "0";
}
