const $PlayButton = document.querySelector(".btn-start");
let gameStarted = false;
$PlayButton.onclick = function () {
  prepareStartGame();
  startGame();
  let CPUTurn = [];
};

function prepareStartGame() {
  const $startText = document.querySelector(".start-text");
  gameStarted = true;
  if (gameStarted == true) {
    $PlayButton.classList.add("hidden");
    $startText.classList.add("hidden");
  }
}

function startGame() {
  const $roundText = document.querySelector(".round-text");
  const $turnText = document.querySelector(".turn-text");
  $turnText.classList.remove("hidden");
  $roundText.classList.remove("hidden");
}
