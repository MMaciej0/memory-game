document.addEventListener("DOMContentLoaded", () => {
  //   card options
  const cards = [
    { name: "fries", img: "./images/fries.png" },
    { name: "cheeseburger", img: "./images/cheeseburger.png" },
    { name: "hotdog", img: "./images/hotdog.png" },
    { name: "ice-cream", img: "./images/ice-cream.png" },
    { name: "milkshake", img: "./images/milkshake.png" },
    { name: "pizza", img: "./images/pizza.png" },
    { name: "fries", img: "./images/fries.png" },
    { name: "cheeseburger", img: "./images/cheeseburger.png" },
    { name: "hotdog", img: "./images/hotdog.png" },
    { name: "ice-cream", img: "./images/ice-cream.png" },
    { name: "milkshake", img: "./images/milkshake.png" },
    { name: "pizza", img: "./images/pizza.png" },
  ];

  cards.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const result = document.querySelector("#result");
  let cardChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cards[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cards[cardId].img);
    if (cardChosen.length === 2) {
      setTimeout(cardCompare, 500);
    }
  }

  function cardCompare() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId) {
      alert("You have clicked the same image!");
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
    } else if (cardChosen[0] === cardChosen[1]) {
      alert("You have found a match!");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
    }
    cardChosen = [];
    cardsChosenIds = [];
    result.innerText = cardsWon.length;
    if (cardsWon.length === cards.length / 2) {
      alert("YOU WON!!!!");
      result.innerText = "YOU WON!!!!";
    }
  }

  createBoard();
});
