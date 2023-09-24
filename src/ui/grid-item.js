import axios from "axios";
import { getTeams } from "../categories";

const addPlayer = (gridItem, player) => {
  gridItem.classList.add("correct");
  const gridItemChildren = Array.from(gridItem.childNodes);

  // Get latest player image
  const playerImg = gridItemChildren[0];
  playerImg.src = `https://assets.nhle.com/mugs/nhl/latest/${player.id}.png`;
  const playerName = gridItemChildren[1];
  playerName.textContent = player.fullName;
};

const getRow = (index) => {
  return Math.floor(index / 3);
};

const getCol = (index) => {
  return index % 3;
};

export { addPlayer, getRow, getCol };
