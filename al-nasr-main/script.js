const players = [
  // { name: "David Ospina", image: "./img/players/keeper.png", number: 1 },
  { name: "Anderson Talisca", image: "./img/players/anderson.png", number: 94 },
  { name: "Ghislain Konan", image: "./img/players/Ghislain.png", number: 13 },
  { name: "Alvaro", image: "./img/players/alvaro.png", number: 21 },
  //   { name: "V. Aboubakar", image: "./img/players/vincent.png", number: 21 },
  { name: "Ferjani Sassi", image: "./img/players/sassi.png", number: 13 },
  { name: "Ronaldo", image: "./img/ronaldo.png", number: 7 },
];
const player = document.querySelector(".players");
const rolDiv = document.querySelector(".rol-div");
const result = getComputedStyle(rolDiv, ":after").content;
const number = document.querySelector(".number");
const name1 = document.querySelector(".name");

var current = 0;
var count = window.setInterval(() => {
  if (current < players.length) {
    player.setAttribute("src", players[current].image);
    number.textContent = players[current].number;
    // name1.textContent = players[current].name;

    current++;
  } else {
    current = 0;
  }
}, 3000);
