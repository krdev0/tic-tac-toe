let editedPlayer = 0;
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

const editPlayer1Btn = document.querySelector("#edit-player-1");
const editPlayer2Btn = document.querySelector("#edit-player-2");
const cancelPlayerModal = document.querySelector("#cancel-player-config");

const configForm = document.querySelector("form");
const configError = document.querySelector("#config-error");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelPlayerModal.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

configForm.addEventListener("submit", savePlayerName);

console.log(configForm);