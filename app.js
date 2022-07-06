const $ROUND_TEXT = document.querySelector(".round-text");
const $TURN_TEXT = document.querySelector(".turn-text");
const $PLAY_BUTTON = document.querySelector(".btn-start");
const $START_TEXT = document.querySelector(".start-text");
let gameStarted = false;
let round = 0;
let CPUMoves = [];
let HumanMoves = [];
const $BLUE_SQUARE = document.querySelector("#blue");
const $RED_SQUARE = document.querySelector("#red");
const $GREEN_SQUARE = document.querySelector("#green");
const $YELLOW_SQUARE = document.querySelector("#yellow");
const $SQUARES = document.querySelectorAll(".square");

const LIGHT_DURATION = 250;
const MOVE_DURATION = 500;
$PLAY_BUTTON.onclick = function () {
  prepareStartGame();
  startGame();
  playRound();
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
}

function computerTurn() {
  $ROUND_TEXT.innerText = `Round ${round}`;
  $TURN_TEXT.innerText = "CPU Turn";

  enableInputs(false);

  let move = Math.floor(Math.random() * 4);
  CPUMoves.push(move);
  //I es indice de cada movimiento (array)
  CPUMoves.forEach((move, i) => {
    highlight($SQUARES[move], i * MOVE_DURATION);
  });
}

function highlight(square, delay) {
  setTimeout(function () {
    square.classList.toggle("bg-white");
    setTimeout(function () {
      square.classList.toggle("bg-white");
    }, LIGHT_DURATION);
  }, delay);
}

function humanTurn() {
  $TURN_TEXT.innerText = "Your turn";
  HumanMoves = [];
  enableInputs(true);
}

function enableInputs(enabled = true) {
  $SQUARES.forEach(function (square) {
    if (enabled) {
      square.onclick = handleClick;
    } else {
      square.onclick = function () {};
    }
  });
}

function handleClick(e) {
  highlight(e.target, 0);

  if (e.target.id == "blue") {
    HumanMoves.push(0);
  }
  if (e.target.id == "red") {
    HumanMoves.push(1);
  }
  if (e.target.id == "green") {
    HumanMoves.push(2);
  }
  if (e.target.id == "yellow") {
    HumanMoves.push(3);
  }
  HumanMoves.forEach((move, i) => {
    if (move != CPUMoves[i]) {
      gameOver();
      return;
    }
  });
  if (HumanMoves.length === CPUMoves.length) {
    enableInputs(false);
    setTimeout(playRound, MOVE_DURATION);
  }
}

function gameOver() {
  alert("You lost");
  $PLAY_BUTTON.classList.remove("hidden");
  $START_TEXT.classList.remove("hidden");
  round = 0;
  CPUMoves = [];
}

function playRound() {
  round++;
  computerTurn();
  setTimeout(humanTurn, CPUMoves.length * MOVE_DURATION);
}
