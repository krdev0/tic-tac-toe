const gameFieldData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const backdrop = document.querySelector("#backdrop");
const playerConfigModal = document.querySelector("#config-overlay");
const gameArea = document.querySelector("#active-game");
const gamePlayFields = document.querySelectorAll("#game-board li");
const currentPlayerName = document.querySelector("#active-player-name");

const editPlayer1Btn = document.querySelector("#edit-player-1");
const editPlayer2Btn = document.querySelector("#edit-player-2");
const cancelPlayerModal = document.querySelector("#cancel-player-config");
const gameOverElement = document.querySelector("#game-over");

const configForm = document.querySelector("form");
const configError = document.querySelector("#config-error");

const startGameBtn = document.querySelector("#start-game-btn");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelPlayerModal.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

configForm.addEventListener("submit", savePlayerName);

startGameBtn.addEventListener("click", startNewGame);

for (const singleSquare of gamePlayFields) {
  singleSquare.addEventListener("click", selectSingleSquare);
}
