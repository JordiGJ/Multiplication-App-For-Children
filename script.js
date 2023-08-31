// get elements
const scoreS = document.querySelector("#score");
const fNum = document.querySelector("#firstNum");
const sNum = document.querySelector("#secondNum");
const btn = document.querySelector("button");

// variables
let score = 0;

// functions
function randomNums() {
  const rOne = Math.floor(Math.random() * 10);
  const rTwo = Math.floor(Math.random() * 10);
  fNum.textContent = rOne;
  sNum.textContent = rTwo;
}

function handleClick(e) {
  e.preventDefault();
  const userInput = document.querySelector("input");
  const first = +fNum.textContent;
  const second = +sNum.textContent;
  const result = first * second;
  result !== +userInput.value ? score-- : score++;
  scoreS.textContent = score;
  randomNums();
  userInput.value = "";
  if (score < 0) {
    scoreS.classList.add("red");
  } else {
    scoreS.classList.remove("red");
  }
}

// event listeners
btn.addEventListener("click", handleClick);

// init
randomNums();
