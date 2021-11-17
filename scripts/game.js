function resetGameState() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  gameOverElement.firstElementChild.innerHTML =
    "<h3>You won, <span id='winner-name'>PLAYER NAME</span></h3>";
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameFieldData[i][j] = 0;

      gamePlayFields[gameBoardIndex].textContent = "";
      gamePlayFields[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for players");
    return;
  }

  resetGameState();

  currentPlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameFieldData[i][0] > 0 &&
      gameFieldData[i][0] === gameFieldData[i][1] &&
      gameFieldData[i][1] === gameFieldData[i][2]
    ) {
      return gameFieldData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameFieldData[0][i] > 0 &&
      gameFieldData[0][i] === gameFieldData[1][i] &&
      gameFieldData[0][i] === gameFieldData[2][i]
    ) {
      return gameFieldData[0][i];
    }
  }

  if (
    gameFieldData[0][0] > 0 &&
    gameFieldData[0][0] === gameFieldData[1][1] &&
    gameFieldData[1][1] === gameFieldData[2][2]
  ) {
    return gameFieldData[0][0];
  }

  if (
    gameFieldData[2][0] > 0 &&
    gameFieldData[2][0] === gameFieldData[1][1] &&
    gameFieldData[1][1] === gameFieldData[0][2]
  ) {
    return gameFieldData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  currentPlayerName.textContent = players[activePlayer].name;
}

function selectSingleSquare(event) {
  if (gameIsOver) {
    return;
  }

  const selectedSquare = event.target;

  selectedSquare.textContent = players[activePlayer].symbol;
  selectedSquare.classList.add("disabled");

  const selectedColumn = selectedSquare.dataset.col - 1;
  const selectedRow = selectedSquare.dataset.row - 1;

  if (gameFieldData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field!");
    return;
  }

  gameFieldData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerID = checkForGameOver();

  if (winnerID !== 0) {
    endGame(winnerID);
  }

  currentRound++;
  switchPlayer();
}

function endGame(winnerID) {
  gameIsOver = true;
  gameOverElement.style.display = "block";

  if (winnerID > 0) {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      "You won, " + players[winnerID - 1].name;
  } else {
    gameOverElement.firstElementChild.textContent = "DRAW";
  }
}
