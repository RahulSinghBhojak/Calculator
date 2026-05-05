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

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}
const disp = document.querySelector(".display");
div.addEventListener("click", (e) => {
  if (e.target.classList.contains("allbtn")) {
    if (e.target.textContent === "ac") {
      disp.textContent = "";
    } else if (e.target.textContent === "c") {
      disp.textContent = disp.textContent.slice(0, -1);
    } else if (e.target.textContent === "=") {
      let num1 = 0;
      let num2 = 0;
      let operator = "";
      let result = "";
      num1 = Number(disp.textContent.slice(0, 2));
      operator = disp.textContent[2];
      num2 = Number(disp.textContent.slice(3));
      result = operate(num1, num2, operator);

      disp.textContent = result;
    } else {
      disp.textContent += e.target.textContent;
    }
  }
});
