var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
var diceImageElement = document.querySelector("img1");
diceImageElement.setAttribute('src', diceImages[randomNumber1 - 1]);