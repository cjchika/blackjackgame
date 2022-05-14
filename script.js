const startBtn = document.getElementById("start-game")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let newCardBtn = document.getElementById('new-card')

let cards = [];
let sum = 0;
let isAlive = false;

console.log(cards);

let message = "";

function getRandomCard() {
  let randomNum = Math.floor( Math.random() * 13 ) + 1;

  if (randomNum > 10) {
    return 10
  } else if (randomNum === 1) {
    return 11
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;
}

function renderGame() {
  
  startGame()

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
	cardEl.textContent = "Cards:" + " ";

  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + ' ';
  }

}

function newCard(){
  let card = getRandomCard();
  sum += card;; 
  cards.push(card)
  renderGame();
}

startBtn.addEventListener("click", renderGame)
newCardBtn.addEventListener("click", newCard)




