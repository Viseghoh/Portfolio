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
  let dieNumber = Math.floor(Math.random() * 6) + 1;

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
  console.log(`Die: ${dieNumber}`);
  console.log(turnTotal);
};

// Hold Function
const endTurn = (currentPlayer) => {
  playerScore = turnTotal;
  document.querySelector(`#score--${currentPlayer}`).textContent = playerScore;
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  console.log(currentPlayer);
};

// Switch Player
const switchPlayer = (currentPlayer) => {};

addGlobalEventListener("click", ".btn--roll", (e) => {
  diceRoll(currentPlayer);
});
addGlobalEventListener("click", ".btn--hold", (e) => {
  endTurn(currentPlayer);
});
