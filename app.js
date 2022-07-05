const $roundText = document.querySelector(".round-text");
const $turnText = document.querySelector(".turn-text");
const $PlayButton = document.querySelector(".btn-start");
const $startText = document.querySelector(".start-text");
let gameStarted = false;
let round = 0;
const $blue = document.querySelector("#blue");
const $red = document.querySelector("#red");
const $green = document.querySelector("#green");
const $yellow = document.querySelector("#yellow");
$PlayButton.onclick = function () {
  prepareStartGame();
  startGame();
  computerTurn();
};

function prepareStartGame() {
  gameStarted = true;
  if (gameStarted == true) {
    $PlayButton.classList.add("hidden");
    $startText.classList.add("hidden");
  }
}

function startGame() {
  $turnText.classList.remove("hidden");
  $roundText.classList.remove("hidden");
  round++;
}

function computerTurn() {
  $roundText.innerText = `round ${round}`;
  let CPUTurn = [];
  let random = Math.floor(Math.random() * 4);
  CPUTurn.push(random);
  console.log(CPUTurn);
  if (random === 0) {
    highlight($blue);
  }
  if (random === 1) {
    highlight($red);
  }
  if (random === 2) {
    highlight($green);
  }
  if (random === 3) {
    highlight($yellow);
  }
}

function highlight(square) {
  square.classList.toggle("bg-white");

  //   setTimeout(square.classList.toggle("bg-white"), 300);
}
