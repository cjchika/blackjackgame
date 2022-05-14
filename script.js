const startBtn = document.getElementById("start-game")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let firstCard = 9;
let secondCard = 4;
let sum = firstCard + secondCard;
let isAlive = true;

let message = "";

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new Card?";
  } else if (sum === 21) {
    message = "Wohoo!, You've got got Blackjack";
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }   
  messageEl.textContent = message;
	sumEl += sumEl.textContent = "Sum:" + " " + sum;
	cardEl.textContent = "Cards:" + " " + firstCard + " " + secondCard;
}

startBtn.addEventListener("click", startGame)