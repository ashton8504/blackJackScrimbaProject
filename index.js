
let cards = [];// array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById('player-el');

let player = {
    name: "ASHTON",
    chips: 23
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randonNumber = Math.floor(Math.random() * 13) + 1;
    if (randonNumber > 10) {
        return 10
    } else if (randonNumber  === 1) {
        return 11
    } else {
        return randonNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "DO YOU WANT A NEW CARD?"
    } else if (sum === 21) {
        message = "YOU'VE GOT THE BLACKJACK!"
        hasBlackJack = true
    } else {
        message = "YOU'RE OUT OF THE GAME!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("DRAWING A NEW CARD FROM THE DECK!")
}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame()
    }
    
}
