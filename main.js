let passageEl = document.getElementById("passage-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Bhanu Prakash",
  chips: 200,
};

playerEl.textContent = player.name + ": $" + player.chips;

function randomNumberGen() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = randomNumberGen();
  let secondCard = randomNumberGen();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  passageEl.textContent = message;
}

function getNewCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomNumberGen();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
