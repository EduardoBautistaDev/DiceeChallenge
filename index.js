var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
var diceImageElement1 = document.querySelector(".img1");
var diceImageElement2 = document.querySelector(".img2");
var titleElement = document.querySelector("h1");

diceImageElement1.setAttribute('src', "images/" + diceImages[randomNumber1 - 1]);
diceImageElement2.setAttribute('src', "images/" + diceImages[randomNumber2 - 1]);

if (randomNumber1 > randomNumber2) {
    titleElement.innerText = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    titleElement.innerText = "Player 2 wins! 🚩"
}
else{
    titleElement.innerText = "🚩 Draw! 🚩"
}