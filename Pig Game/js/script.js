"use strict";
let currentPlayer = 0;
let scoreToWin = 80;
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

    // Update Player's Current Total
    turnTotal += dieNumber;
    document.querySelector(
      `#current--${currentPlayer}`
    ).textContent = turnTotal;
  } else {
    turnTotal = 0;
    // Reset Player Total
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    // Reset Current Score
    document.querySelector(`#score--${currentPlayer}`).textContent = 0;
    switchPlayer();
  }
};

// Hold Function
const endTurn = (currentPlayer) => {
  // Get Current Player Score
  let currentPlayerScore = Number(
    document.querySelector(`#score--${currentPlayer}`).textContent
  );
  // Add the turn Total to Player Score
  currentPlayerScore += turnTotal;

  // Update Current Player Score
  document.querySelector(
    `#score--${currentPlayer}`
  ).textContent = currentPlayerScore;

  // Reset Turn Total
  turnTotal = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;

  // Switch Players

  switchPlayer();
};

// Switch Player
const switchPlayer = () => {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");
  document
    .querySelector(
      `.player--${
        currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0)
      }`
    )
    .classList.add("player--active");
};

// Reset Game
const gameReset = () => {
  // Reset Player Scores
  const allScores = document.querySelectorAll(".score");
  for (let score of allScores) {
    score.textContent = 0;
  }
  // Reset Current Scores
  const allCurrentScores = document.querySelectorAll(".current-score");
  for (let score of allCurrentScores) {
    score.textContent = 0;
  }
  // Remove Player Active
  const players = document.querySelectorAll(".player");
  for (let player of players) {
    player.classList.remove("player--active");
  }
  // Add active back to Player 1
  document.querySelector(".player--0").classList.add("player--active");
};

addGlobalEventListener("click", ".btn--roll", (e) => {
  diceRoll(currentPlayer);
});
addGlobalEventListener("click", ".btn--hold", (e) => {
  endTurn(currentPlayer);
});
addGlobalEventListener("click", ".btn--new", (e) => {
  gameReset();
});
