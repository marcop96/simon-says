const $ROUND_TEXT = document.querySelector(".round-text");
const $TURN_TEXT = document.querySelector(".turn-text");
const $PLAY_BUTTON = document.querySelector(".btn-start");
const $START_TEXT = document.querySelector(".start-text");
let gameStarted = false;
let round = 0;
let CPUTurn = [];
const $BLUE_SQUARE = document.querySelector("#blue");
const $RED_SQUARE = document.querySelector("#red");
const $GREEN_SQUARE = document.querySelector("#green");
const $YELLOW_SQUARE = document.querySelector("#yellow");
$PLAY_BUTTON.onclick = function () {
  prepareStartGame();
  startGame();
  computerTurn();
  humanTurn();
};

function prepareStartGame() {
  gameStarted = true;
  if (gameStarted == true) {
    $PLAY_BUTTON.classList.add("hidden");
    $START_TEXT.classList.add("hidden");
  }
}

function startGame() {
  $TURN_TEXT.classList.remove("hidden");
  $ROUND_TEXT.classList.remove("hidden");
  round++;
}

function computerTurn() {
  $ROUND_TEXT.innerText = `round ${round}`;

  let random = Math.floor(Math.random() * 4);
  CPUTurn.push(random);
  console.log(CPUTurn);
  if (random === 0) {
    highlight($BLUE_SQUARE);
    return;
  }
  if (random === 1) {
    highlight($RED_SQUARE);
    return;
  }
  if (random === 2) {
    highlight($GREEN_SQUARE);
    return;
  }
  if (random === 3) {
    highlight($YELLOW_SQUARE);
    return;
  }
  return CPUTurn.push(random);
}

function highlight(square) {
  square.classList.toggle("bg-white");

  setTimeout(function () {
    square.classList.toggle("bg-white");
  }, 1000);
}

function humanTurn() {
  $TURN_TEXT.innerText = "Your turn";
}
