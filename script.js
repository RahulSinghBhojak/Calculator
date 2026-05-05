const buttons = [
  "ac",
  "c",
  "+/-",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "%",
  "0",
  ".",
  "=",
];
const div = document.querySelector(".keys");
buttons.forEach((value) => {
  const btn = document.createElement("button");
  btn.textContent = value;
  btn.classList.add("allbtn");
  div.appendChild(btn);
});

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}

// Intialize variable
let firstNumber = null;
let operator = null;
let resetDisplay = false;

// main logic
const disp = document.querySelector(".display");
div.addEventListener("click", (e) => {
  if (!e.target.classList.contains("allbtn")) return;
  const value = e.target.textContent;

  // AC logic
  if (value === "ac") {
    disp.textContent = "";
    firstNumber = null;
    operator = null;
    resetDisplay = false;
    return;
  }

  // c logic
  if (value === "c") {
    disp.textContent = disp.textContent.slice(0, -1);
    return;
  }

  // ["+","-","/","*"] logic
  if (["+", "-", "/", "*"].includes(value)) {
    const current = Number(disp.textContent);
    if (firstNumber === null) {
      firstNumber = current;
    } else {
      firstNumber = operate(firstNumber, current, operator);
      disp.textContent = firstNumber;
    }
    operator = value;
    resetDisplay = true;
    return;
  }

  // "=" logic
  if (value === "=") {
    const current = Number(disp.textContent);

    if (operator !== null) {
      const result = operate(firstNumber, current, operator);
      disp.textContent = result;

      firstNumber = result;
      operator = null;
      shouldResetDisplay = true;
    }
    return;
  }

  if (resetDisplay) {
    disp.textContent = value;
    resetDisplay = false;
  } else {
    disp.textContent += value;
  }
});
