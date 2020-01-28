// Create an array cards.
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// An array to hold the cards that are in play
const cardsInPlay = [];

let checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
};

// flipped card function
let flipCard = function() {
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	cardsInPlay.push(cards[cardId].rank);
	
	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length === 2){
		checkForMatch();
	}	
	
};

//function to create the board
const createBoard = function()	{
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);		
	}
};

//function to reset the game
const resetGame = function(){
	for (let i=0; i<cards.length; i++){
		let cardElement = document.getElementByTagName('img');
		cardElement[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay.pop();
	cardsInPlay.pop();
};

const button = document.getElementById('button');
button.addEventListener('click', resetGame);

createBoard();






