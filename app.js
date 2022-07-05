const $PlayButton = document.querySelector(".btn-start");
let gameStarted = new Boolean(false);
$PlayButton.onclick = function () {
  prepareStartGame();
};

function prepareStartGame() {
  const $startText = document.querySelector(".start-text");
  gameStarted = true;
  if (gameStarted == true) {
    $PlayButton.classList.add("hidden");
    $startText.classList.add("hidden");
  }
}

console.log(gameStarted);
