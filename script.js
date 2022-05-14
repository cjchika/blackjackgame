const startBtn = document.getElementById("start-game")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let newCardBtn = document.getElementById('new-card')

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let isAlive = true;

let message = "";

function getRandomCard() {
  return Math.floor( Math.random() * 13 ) + 1;
}

function renderGame() {
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
  console.log(cards);
  renderGame();
}

startBtn.addEventListener("click", renderGame)
newCardBtn.addEventListener("click", newCard)

let names = ['Hello', 'there', 'welcome', 'back']
let greetingEl = document.getElementById('greeting-el')

for (let i = 0; i < names.length; i++) {
  greetingEl.textContent += names[i] + ' ';
}


