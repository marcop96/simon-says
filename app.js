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
  console.log(CPUTurn);
}
