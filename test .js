let valueInString = "";
let display = document.getElementById("display");

function appendValue(value) {
  valueInString += value;
  display.textContent = valueInString;
  return valueInString;
}

function calculate() {
  const valueInString = appendValue();
  let operators = ["/", "x", "+", "-"];
  let options =
    operators.indexOf("/") ||
    operators.indexOf("x") ||
    operators.indexOf("+") ||
    operators.indexOf("-");
  let firstValue = valueInString.substring(0, options);
  let secondValue = valueInString.substring(
    options + 1,
    valueInString,
    length - 1
  );
  let initialValue = parseFloat(firstValue);
  let currentValue = parseFloat(secondValue);
}
