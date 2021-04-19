"use strict";
let answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer);
let score = 20;

let highScore = document.querySelector(".highscore");

let currentScore = document.querySelector(".score");

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const setNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

const setScore = (score) => {
  document.querySelector(".score").textContent = score;
};

const disableCheckButton = (flag) => {
  document.querySelector(".check").disabled = flag;
};

const setBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", (e) => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔️ No Number!");
  } else if (guess === answer) {
    displayMessage("😍 You're Correct!");
    setNumber(guess);
    disableCheckButton(true);
    setBackgroundColor("#60b347");

    if (Number(currentScore.textContent) > Number(highScore.textContent)) {
      highScore.textContent = currentScore.textContent;
    }
  } else if (guess !== answer) {
    if (score > 1) {
      score--;
      displayMessage(guess > answer ? "👎🏾 Too High!" : "👍🏾 Too Low!");
      setScore(score);
    } else {
      displayMessage("Game Over!!!");
      disableCheckButton(true);
      score = 0;
      setNumber(answer);
    }
  }
});

document.querySelector(".again").addEventListener("click", (e) => {
  disableCheckButton(false);
  setNumber("?");
  document.querySelector(".guess").value = "";
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(answer);

  setScore(score);
  displayMessage("Start guessing...");
  setBackgroundColor("#222");
});
