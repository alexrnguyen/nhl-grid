import players, { getPlayerId, getPlayerMugshot } from "@nhl-api/players";
import "./css/style.css";

const grid = document.createElement("div");
grid.classList.add("grid");

const mugshot = getPlayerMugshot({
  name: "Zach Hyman",
  team: "tor",
  season: "20182019",
});

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

playerInfo.forEach((player) => {
  const mugshot = getPlayerMugshot(player);
  const mugshotImg = document.createElement("img");
  mugshotImg.classList.add("grid-item");
  mugshotImg.src = mugshot;
  grid.appendChild(mugshotImg);
});

document.body.appendChild(grid);
