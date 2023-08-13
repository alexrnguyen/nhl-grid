import players, { getPlayerId, getPlayerMugshot } from "@nhl-api/players";
import "./css/style.css";
import {
  createOverlay,
  createSearchModal,
  triggerSearchModal,
} from "./searchModal";
import { createCategories } from "./categories";

const playerInfo = [
  {
    name: "Kris Letang",
    team: "pit",
    season: "20162017",
  },
  {
    name: "Zach Hyman",
    team: "tor",
    season: "20182019",
  },
  {
    name: "Vladimir Tarasenko",
    team: "stl",
    season: "20162017",
  },
  {
    name: "Leon Draisaitl",
    team: "edm",
    season: "20212022",
  },
  {
    name: "Patrice Bergeron",
    team: "bos",
    season: "20142015",
  },
  {
    name: "Connor McDavid",
    team: "edm",
    season: "20152016",
  },
  {
    name: "Daniel Sedin",
    team: "van",
    season: "20102011",
  },
  {
    name: "Wayne Gretzky",
    team: "edm",
    season: "19861987",
  },
  {
    name: "Tim Horton",
    team: "tor",
    season: "19681969",
  },
];

const initializeGame = () => {
  const content = document.createElement("div");
  content.id = "content";

  const grid = document.createElement("div");
  grid.id = "player-grid";
  content.appendChild(grid);
  content.appendChild(createCategories("row"));
  content.appendChild(createCategories("col"));

  document.body.appendChild(content);
  document.body.appendChild(createSearchModal());
  document.body.appendChild(createOverlay());
  for (let i = 0; i < 9; i++) {
    createGridItem(i);
  }
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

  gridItem.addEventListener("click", () => {
    triggerSearchModal(index);
  });
};

initializeGame();
