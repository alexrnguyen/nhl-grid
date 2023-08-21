import { addPlayer } from "./grid-item";
import {
  getSearchResults,
  searchPlayer,
} from "../controllers/search-controller";
import { checkGameOver, checkPlayer } from "../controllers/game-controller";

const createSearchModal = () => {
  const searchModal = document.createElement("div");
  searchModal.className = "modal";
  searchModal.id = "search-modal";
  searchModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.id = "modal-header-container";

  const header = document.createElement("h1");
  header.id = "modal-header";

  const closeButton = document.createElement("button");
  closeButton.className = "close-modal";
  closeButton.textContent = "X";

  closeButton.addEventListener("click", () => {
    document.getElementById("search-player").value = "";
    toggleModal(searchModal);
  });

  headerContainer.appendChild(header);
  headerContainer.appendChild(closeButton);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for player...";
  searchInput.name = "search-player";
  searchInput.id = "search-player";

  const playerItemsContainer = document.createElement("div");
  playerItemsContainer.id = "player-items-container";

  searchModal.appendChild(headerContainer);
  searchModal.appendChild(searchInput);
  searchModal.appendChild(playerItemsContainer);
  return searchModal;
};

const triggerSearchModal = (gridItem) => {
  const searchModal = document.getElementById("search-modal");
  toggleModal(searchModal);
  clearSearchResults();
  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const header = document.getElementById("modal-header");
  header.textContent = `${team1}-${team2}`;

  const searchInput = document.getElementById("search-player");
  searchInput.oninput = async (event) => {
    const searchResults = await getSearchResults(searchInput.value);
    searchResults.forEach((player) => {
      const playerInfo = player.split("|");
      const playerId = playerInfo[0];
      const birthDate = playerInfo[10];
      const name = `${playerInfo[2]} ${playerInfo[1]}`;
      createPlayerItem(name, birthDate, playerId, gridItem);
    });
  };
};

const onPlayerSelected = async (playerId, gridItem) => {
  const searchModal = document.getElementById("search-modal");

  const player = await searchPlayer(playerId);

  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const playedForBothTeams = await checkPlayer(team1, team2, player);
  if (playedForBothTeams) {
    addPlayer(gridItem, player);
  } else {
    console.log("Incorrect!");
  }
  document.getElementById("search-player").value = "";
  toggleModal(searchModal);
  checkGameOver();
};

const createPlayerItem = (playerName, birthDate, playerId, gridItem) => {
  const playerItemsContainer = document.getElementById(
    "player-items-container"
  );

  const playerItem = document.createElement("div");
  playerItem.className = "player-item";

  const playerNameElement = document.createElement("p");
  playerNameElement.className = "player-result-name";
  playerNameElement.textContent = playerName;
  playerItem.appendChild(playerNameElement);

  const birthDateElement = document.createElement("p");
  birthDateElement.className = "birth-date";
  birthDateElement.textContent = birthDate;
  playerItem.appendChild(birthDateElement);

  playerItem.addEventListener("click", () =>
    onPlayerSelected(playerId, gridItem)
  );

  playerItemsContainer.appendChild(playerItem);
};

const clearSearchResults = () => {
  // Clear previous search results
  const playerItemsContainer = document.getElementById(
    "player-items-container"
  );
  playerItemsContainer.innerHTML = "";
};

const toggleModal = (modal) => {
  const overlay = document.getElementById("overlay");
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");
  return overlay;
};

export {
  createSearchModal,
  triggerSearchModal,
  createPlayerItem,
  createOverlay,
  clearSearchResults,
  toggleModal,
};
