import { addPlayer } from "./grid-item";
import { searchPlayer } from "./search-controller";
import { checkPlayer } from "./game-controller";

const createSearchModal = () => {
  const searchModal = document.createElement("div");
  searchModal.id = "search-modal";
  searchModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.id = "modal-header-container";

  const header = document.createElement("h1");
  header.id = "modal-header";

  const closeButton = document.createElement("button");
  closeButton.id = "close-modal";
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

  searchModal.appendChild(headerContainer);
  searchModal.appendChild(searchInput);
  return searchModal;
};

const triggerSearchModal = (gridItem) => {
  const index = gridItem.dataset.index;
  const searchModal = document.getElementById("search-modal");
  toggleModal(searchModal);

  const team1 = gridItem.dataset.team1;
  const team2 = gridItem.dataset.team2;
  const header = document.getElementById("modal-header");
  header.textContent = `${team1}-${team2}`;

  const searchInput = document.getElementById("search-player");
  searchInput.onkeydown = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const player = await searchPlayer(searchInput.value);
      console.log(player);
      const gridItem = document.querySelectorAll(".grid-item")[index];

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
    }
  };
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

export { createSearchModal, triggerSearchModal, createOverlay };
