"use strict";
let answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer);
let score = 20;

let message = document.querySelector(".message");
let number = document.querySelector(".number");
let highScore = document.querySelector(".highscore");
let guessCheck = document.querySelector(".check");
let currentScore = document.querySelector(".score");

document.querySelector(".check").addEventListener("click", (e) => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "⛔️ No Number!";
  } else if (guess === answer) {
    message.textContent = "😍 You're Correct!";
    number.textContent = guess;
    guessCheck.disabled = true;
    document.body.style.backgroundColor = "#60b347";

    if (Number(currentScore.textContent) > Number(highScore.textContent)) {
      highScore.textContent = currentScore.textContent;
    }
  } else if (guess > answer) {
    if (score > 1) {
      message.textContent = "👎🏾 Too High!";
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = "Game Over!!!";
      guessCheck.disabled = true;
      score = 0;
      currentScore.textContent = score;
      number.textContent = answer;
    }
  } else if (guess < answer) {
    if (score > 1) {
      message.textContent = "👍🏾 Too Low!";
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = "Game Over!!!";
      guessCheck.disabled = true;
      score = 0;
      currentScore.textContent = score;
      number.textContent = answer;
    }
  }
});

document.querySelector(".again").addEventListener("click", (e) => {
  guessCheck.disabled = false;
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(answer);
  currentScore.textContent = score;
  message.textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
});
