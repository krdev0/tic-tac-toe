function openPlayerConfig(event) {
  editedPlayer = Number(event.target.dataset.player);
  playerConfigModal.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigModal.style.display = "none";
  backdrop.style.display = "none";
  configForm.firstElementChild.classList.remove("error");
  configError.textContent = "";
  configForm.firstElementChild.lastElementChild.value = '';
}

function savePlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    configError.textContent = "Please enter a valid name";
    return;
  }

  const updatedPlayerData = document.querySelector(
    "#player-" + editedPlayer + "-data"
  );

  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
