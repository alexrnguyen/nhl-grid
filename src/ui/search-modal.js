import { getSearchResults } from "../controllers/search-controller";
import { toggleModal } from "./modal";
import createPlayerItem from "./player-result.item";

/**
 * Creates a search modal on game initialization. The search modal is
 * hidden by default.
 * @returns Search modal HTML element
 */
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

/**
 * Displays the search modal when the user clicks on a grid item with no player
 * @param {*} gridItem Grid item selected by user
 */
const triggerSearchModal = (gridItem) => {
  const searchModal = document.getElementById("search-modal");
  toggleModal(searchModal);
  clearSearchResults();
  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const header = document.getElementById("modal-header");
  header.textContent = `${team1}-${team2}`;

  const searchInput = document.getElementById("search-player");
  let typingTimer;
  searchInput.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => fetchSearchData(searchInput, gridItem), 250);
  })
};

/**
 * Fetches seach result data from the API
 * @param {*} searchInput Input enterred by user in the search modal
 * @param {*} gridItem Grid item selected by user
 */
const fetchSearchData = async (searchInput, gridItem) => {
  const playerItemsContainer = document.getElementById("player-items-container");
  const searchResults = await getSearchResults(searchInput.value);
  searchResults.forEach(async (player) => {
    const playerId = Number(player["playerId"]);
    console.log("Player", player);
    console.log("ID", playerId);
    const playerResponse = await fetch(`/api/player/${playerId}`);
    const playerData = await playerResponse.json();
    console.log("Data", playerData);
    const birthDate = playerData.birthDate;
    const name = player["name"];

    // Add item to player item container if it is not already in the container
    if (playerItemsContainer.querySelector(`.player-item[data-playerid="${Number(playerId)}"]`) === null) {
      playerItemsContainer.appendChild(
        createPlayerItem(name, birthDate, playerId, gridItem)
      );
    }
  });
};

/**
 * Clears the player results shown below the search bar
 */
const clearSearchResults = () => {
  const playerItemsContainer = document.getElementById(
    "player-items-container"
  );
  playerItemsContainer.innerHTML = "";
};

export {
  createSearchModal,
  triggerSearchModal,
  createPlayerItem,
  clearSearchResults,
};
