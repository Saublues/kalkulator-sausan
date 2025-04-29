const mainDisplay = document.getElementById("main-display");
const secondaryDisplay = document.getElementById("secondary-display");

let firstValue = "";
let operator = "";
let waitingForSecondValue = false;

function appendToDisplay(value) {
  if (waitingForSecondValue) {
    mainDisplay.value = "";
    waitingForSecondValue = false;
  }
  mainDisplay.value += value;
}

function clearDisplay() {
  mainDisplay.value = "";
  secondaryDisplay.value = "";
  firstValue = "";
  operator = "";
  waitingForSecondValue = false;
}

function chooseOperator(op) {
  if (mainDisplay.value === "") return;

  firstValue = mainDisplay.value;
  operator = op;
  secondaryDisplay.value = `${firstValue} ${operator}`;
  waitingForSecondValue = true;
}

function calculate() {
  if (firstValue === "" || operator === "" || mainDisplay.value === "") return;

  const secondValue = mainDisplay.value;
  let result;

  try {
    result = eval(`${firstValue} ${operator} ${secondValue}`);
    mainDisplay.value = result;
    secondaryDisplay.value = `${firstValue} ${operator} ${secondValue} =`;
  } catch {
    mainDisplay.value = "Error";
  }

  firstValue = "";
  operator = "";
  waitingForSecondValue = false;
}
