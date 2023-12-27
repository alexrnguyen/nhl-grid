import { addPlayer } from "./grid-item";
import { toggleModal } from "./modal";
import { checkPlayer, checkGameOver } from "../controllers/game-controller";

/**
 * Creates a row containing a player's name/date of birth and a submit button displayed 
 * in the player search modal
 * @param {*} playerName Name of player
 * @param {*} birthDate Player's date of birth
 * @param {*} playerId Player id (defined by NHL)
 * @param {*} gridItem Grid item HTML element selected by player
 * @returns
 */
const createPlayerItem = (playerName, birthDate, playerId, gridItem) => {
  const playerItem = document.createElement("div");
  playerItem.className = "player-item";

  const leftContainer = document.createElement("div");
  leftContainer.className = "player-result-left";
  const playerNameElement = document.createElement("p");
  playerNameElement.className = "player-result-name";
  playerNameElement.textContent = playerName;
  leftContainer.appendChild(playerNameElement);

  const birthDateElement = document.createElement("p");
  birthDateElement.className = "birth-date";
  birthDateElement.textContent = `(${birthDate})`;
  leftContainer.appendChild(birthDateElement);

  playerItem.appendChild(leftContainer);

  const submitButton = document.createElement("button");
  submitButton.className = "result-submit-button";
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", () =>
    onPlayerSelected(playerId, gridItem)
  );

  playerItem.appendChild(submitButton);

  return playerItem;
};

/**
 * Add a player to the game board if a player has played for both teams specified
 * by the grid item given as an argument.
 * @param {*} playerId ID of player selected in search modal
 * @param {*} gridItem Grid item selected by user
 */
const onPlayerSelected = async (playerId, gridItem) => {
  const searchModal = document.getElementById("search-modal");
  const playerResponse = await fetch(`/api/player/${playerId}`);
  const player = await playerResponse.json();
  console.log(player);

  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const playedForBothTeams = await checkPlayer(team1, team2, player);
  if (playedForBothTeams) {
    addPlayer(gridItem, player);
  }
  document.getElementById("search-player").value = "";
  toggleModal(searchModal);
  checkGameOver();
};

export default createPlayerItem;
