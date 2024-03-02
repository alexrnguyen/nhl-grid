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
  let abortController = new AbortController();
  const debounceDelay = 250; // Adjust as needed

  // Debounce function to ensure search query is not processed too often
  const fetchSearchDataDebounced = debounce(() => {
    fetchSearchData(searchInput, gridItem, abortController);
  }, debounceDelay);

  searchInput.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    abortController.abort(); // cancel previous request
    abortController = new AbortController()
    typingTimer = setTimeout(fetchSearchDataDebounced, debounceDelay);
  });
};

/**
 * Fetches search result data from the API
 * @param {*} searchInput Input entered by user in the search modal
 * @param {*} gridItem Grid item selected by user
 * @param {*} abortController Cancels the fetch request if another search request is made
 */
const fetchSearchData = async (searchInput, gridItem, abortController) => {
  const playerItemsContainer = document.getElementById("player-items-container");
  const searchResults = await getSearchResults(searchInput.value);
  searchResults.forEach(async (player) => {
    const playerId = Number(player["playerId"]);
    console.log("Player", player);
    console.log("ID", playerId);
    const playerResponse = await fetch(`/api/player/${playerId}`, { signal: abortController.signal })
    .catch(error => {
      if (error.name === 'AbortError') {
        // Request was aborted, so do nothing
        return;
      }
      throw error;
    });
    if (!playerResponse) return; // abort further processing if the request was aported
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

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

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
