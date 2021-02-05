// ------------JS NOTES
// state to track:
// - how many turns have been played
// -how many cards have been flipped to make sure it hasn't gone beyond 2
// -which cards have been flipped in this round
// -which cards have been match successfully
// -list of all the face down cards values
let turnsPlayed = 0;
let numOfCardsFlipped = 0;
let allCardsValues = ["1", "2", "1", "2"]; //TO DO: shuffle these.
let firstGuess = null;
let secondGuess = null;
let alreadyMatched = [];

//Event Listeners
const allCards = document.querySelectorAll(".card");
for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("click", function (event) {
    const idStr = event.target.id.replace("card_", "");
    const idNum = parseInt(idStr);
    event.target.innerText = allCardsValues[idNum];

    if (firstGuess === null) {
      firstGuess = idNum;
    } else {
      secondGuess = idNum;
    }

    if (secondGuess !== null) {
      turnsPlayed++;

      if (turnsPlayed > 4) {
        const winH1 = document.createElement("h1");
        winH1.innerText = "You lose :(";
        document.querySelector("p").append(winH1);
      }

      if (allCardsValues[firstGuess] === allCardsValues[secondGuess]) {
        console.log("match!");

        alreadyMatched.push(firstGuess);
        alreadyMatched.push(secondGuess);

        if (alreadyMatched.length === 4) {
          const winH1 = document.createElement("h1");
          winH1.innerText = "You win!";
          document.querySelector("p").append(winH1);
        }

        firstGuess = null;
        secondGuess = null;
      } else {
        console.log("no match");
        setTimeout(() => {
          document.querySelector("#card_" + firstGuess).innerText = "X";
          document.querySelector("#card_" + secondGuess).innerText = "X";
          firstGuess = null;
          secondGuess = null;
        }, 2000);
      }
    }
  });
}
console.log(allCards);
