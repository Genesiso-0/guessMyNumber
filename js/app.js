"use strict";
// Setting Variables
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

// Constructing Functions
// Message manipulation Function
const showMessage = function (message) {
  document.querySelector(".response").textContent = message;
};
// Showing the secret Number
const exposeSecretNum = function (secretNum) {
  document.querySelector(".secret").textContent = secretNum;
};

// Implement Functionality to the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    showMessage("⛔️ No Number!");
  } else if (guess === secretNumber) {
    showMessage("🏆️ Congratulations, You guessed the secret number");
    exposeSecretNum(secretNumber);
    document.querySelector(".check").disabled = true;
    document.querySelector("body").style.backgroundColor = "#BAD7DF";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(
        guess >= secretNumber - 3 && guess <= secretNumber + 3
          ? "🎲️ Almost there"
          : guess < secretNumber
          ? "📉️ Too low!"
          : "📈️ Too High!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("😐️ Sorry, Game Over!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#F38181";
    }
  }
});

// Implement Functionality to the reset button
document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  showMessage("Enter a Number to start Guessing!");
  document.querySelector(".secret").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#eeeeee";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
});
