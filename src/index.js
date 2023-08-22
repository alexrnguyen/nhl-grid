import "./css/style.css";
import {
  createOverlay,
  createSearchModal,
  triggerSearchModal,
} from "./ui/search-modal";
import { createCategories } from "./categories";
import { getRow, getCol } from "./ui/grid-item";
import { createWinnerModal } from "./ui/game-over-modal";
import "./assets/icons8-hockey-64.png";

const initializeGame = async () => {
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  const grid = document.createElement("div");
  grid.id = "player-grid";
  content.appendChild(grid);

  // TO-DO: Handle errors for this request
  await Promise.all([createCategories("col"), createCategories("row")]);
  for (let i = 0; i < 9; i++) {
    createGridItem(i);
  }
  document.body.appendChild(createSearchModal());
  document.body.appendChild(createWinnerModal());
  document.body.appendChild(createOverlay());

  const acknowledgement = document.createElement("footer");
  acknowledgement.textContent =
    "All logos and images owned by the National Hockey League. Use of any logos on this website does not constitute a sponsorship or endorsement by the teams, league, or trademark holders.";
  document.body.appendChild(acknowledgement);
};

const createGridItem = (index) => {
  const grid = document.getElementById("player-grid");
  const gridItem = document.createElement("div");
  grid.appendChild(gridItem);

  gridItem.classList.add("grid-item");
  gridItem.dataset.index = index;

  const playerImg = document.createElement("img");
  playerImg.classList.add("player-img");

  const playerName = document.createElement("p");
  playerName.classList.add("player-name");
  gridItem.appendChild(playerImg);
  gridItem.appendChild(playerName);

  getCategories(gridItem);

  gridItem.addEventListener("click", () => {
    // Only open search modal if the grid item does not have a valid player
    if (!gridItem.classList.contains("correct")) {
      triggerSearchModal(gridItem);
    }
  });
};

const getCategories = (gridItem) => {
  const index = gridItem.dataset.index;
  const row = getRow(index);
  const col = getCol(index);

  const rowCategory = document.querySelectorAll(".category.row")[row];
  const colCategory = document.querySelectorAll(".category.col")[col];

  const rowTeam = rowCategory.dataset.team;
  const colTeam = colCategory.dataset.team;

  gridItem.dataset.team1 = rowTeam;
  gridItem.dataset.team2 = colTeam;
};

initializeGame();
