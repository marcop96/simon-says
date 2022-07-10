const $ROUND_TEXT = document.querySelector(".round-text");
const $TURN_TEXT = document.querySelector(".turn-text");
const $PLAY_BUTTON = document.querySelector(".btn-start");
const $START_TEXT = document.querySelector(".start-text");
let gameStarted = false;
let round = 0;
//saves moves into arrays to then iterate and compare
let CPUMoves = [];
let HumanMoves = [];
// const $BLUE_SQUARE = document.querySelector("#blue");
// const $RED_SQUARE = document.querySelector("#red");
// const $GREEN_SQUARE = document.querySelector("#green");
// const $YELLOW_SQUARE = document.querySelector("#yellow");
const $SQUARES = document.querySelectorAll(".square");

//delay for the highlight functions
const LIGHT_DURATION = 250;
const MOVE_DURATION = 500;
$PLAY_BUTTON.onclick = function () {
  prepareStartGame();
  startGame();
  playRound();
};

function prepareStartGame() {
  //hides 'press play to start' and play button
  gameStarted = true;
  if (gameStarted == true) {
    $PLAY_BUTTON.classList.add("hidden");
    $START_TEXT.classList.add("hidden");
  }
}

function startGame() {
  //shows text 'round x' and 'x turn'
  $TURN_TEXT.classList.remove("hidden");
  $ROUND_TEXT.classList.remove("hidden");
}

function computerTurn() {
  //changes texts accordingly
  $ROUND_TEXT.innerText = `Round ${round}`;
  $TURN_TEXT.innerText = "CPU Turn";
  //disables user inputs
  enableInputs(false);
  //generates a random number and pushes into CPUMoves array
  let move = Math.floor(Math.random() * $SQUARES.length);
  CPUMoves.push(move);
  //highlights every single square with the correspondent delay
  CPUMoves.forEach((move, i) => {
    highlight($SQUARES[move], i * MOVE_DURATION);
  });
}

function highlight(square, delay) {
  //sets a timeout for the whole move (highlight and un-highlight)
  setTimeout(function () {
    square.classList.toggle("bg-white");

    setTimeout(function () {
      square.classList.toggle("bg-white");
    }, LIGHT_DURATION);
  }, delay);
}

function humanTurn() {
  //changes text
  $TURN_TEXT.innerText = "Your turn";
  //empties human moves array (human must start from zero every turn)
  HumanMoves = [];
  //enables inputs
  enableInputs(true);
}

function enableInputs(enabled = true) {
  //if inputs are enabled calls handleClick
  $SQUARES.forEach(function (square) {
    if (enabled) {
      square.onclick = handleClick;
    } else {
      square.onclick = function () {};
    }
  });
}

function handleClick(e) {
  // links the squares with respective IDs and pushes them into human array accordingly
  highlight(e.target, 0); // e.target=square, 0 =delay

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
    //compares the human moves to the cpu moves
    if (move != CPUMoves[i]) {
      //if error then calls gameover
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
  $START_TEXT.innerText = "You lost";
  //restarts UI and CPU array
  $PLAY_BUTTON.classList.remove("hidden");
  $START_TEXT.classList.remove("hidden");
  $TURN_TEXT.classList.add("hidden");
  $ROUND_TEXT.innerText = `You reached round ${round}`;
  round = 0;
  CPUMoves = [];
  enableInputs(false);
}

function playRound() {
  //sums round and then after computer turn delays Human turn so it starts after computer finishes
  round++;
  computerTurn();
  setTimeout(humanTurn, CPUMoves.length * MOVE_DURATION);
}
