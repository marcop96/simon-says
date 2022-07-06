const $ROUND_TEXT = document.querySelector(".round-text");
const $TURN_TEXT = document.querySelector(".turn-text");
const $PLAY_BUTTON = document.querySelector(".btn-start");
const $START_TEXT = document.querySelector(".start-text");
let gameStarted = false;
let round = 0;
let CPUTurn = [0, 2];
const $BLUE_SQUARE = document.querySelector("#blue");
const $RED_SQUARE = document.querySelector("#red");
const $GREEN_SQUARE = document.querySelector("#green");
const $YELLOW_SQUARE = document.querySelector("#yellow");
const LIGHT_DURATION = 1000;
const MOVE_DURATION = 2000;
$PLAY_BUTTON.onclick = function () {
  prepareStartGame();
  startGame();
  computerTurn();
  setTimeout(humanTurn, CPUTurn.length * 2000);
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

  let move = Math.floor(Math.random() * 4);
  CPUTurn.push(move);
  //I es indice de cada movimiento (array)
  CPUTurn.forEach((move, i) => {
    if (move === 0) {
      highlight($BLUE_SQUARE, i);
    } else if (move === 1) {
      highlight($RED_SQUARE, i);
    } else if (move === 2) {
      highlight($GREEN_SQUARE, i);
    } else if (move === 3) {
      highlight($YELLOW_SQUARE, i);
    }
  });
}

function highlight(square, i) {
  setTimeout(function () {
    square.classList.toggle("bg-white");
    setTimeout(function () {
      square.classList.toggle("bg-white");
    }, LIGHT_DURATION);
  }, i * MOVE_DURATION);
}

function humanTurn() {
  $TURN_TEXT.innerText = "Your turn";
}
