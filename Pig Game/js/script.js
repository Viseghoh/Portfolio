"use strict";
let currentPlayer = 1;
let playerScore = Number(
  document.querySelector(`#score--${currentPlayer}`).textContent
);

let turnTotal = Number(
  document.querySelector(`#current--${currentPlayer}`).textContent
);
// Global Event Listener
const addGlobalEventListener = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
};

// Dice Roll Function
const diceRoll = (currentPlayer) => {
  // Current Score

  // Roll Die
  let dieNumber = Math.floor(Math.random() * 6 + 1);

  // Change Die Image on Screen
  if (dieNumber !== 1) {
    document
      .querySelector(".dice")
      .setAttribute("src", `./images/dice-${dieNumber}.png`);

    // Update Player's Score
    turnTotal += dieNumber;
    document.querySelector(
      `#current--${currentPlayer}`
    ).textContent = turnTotal;
  }
  console.log(turnTotal);
};

// Hold Function
const holdRoll = (currentPlayer) => {
  playerScore = turnTotal;
  document.querySelector(`#score--${currentPlayer}`).textContent = playerScore;
  if (currentPlayer === 0) {
    currentPlayer++;
  } else {
    currentPlayer--;
  }
};

// Switch Player
const switchPlayer = (currentPlayer) => {};

addGlobalEventListener("click", ".btn--roll", (e) => {
  diceRoll(currentPlayer);
});
addGlobalEventListener("click", ".btn--hold", (e) => {
  holdRoll(currentPlayer);
});
