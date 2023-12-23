/**
 *
 * @param {*} gridItem
 * @param {*} player
 */
const addPlayer = (gridItem, player) => {
  gridItem.classList.add("correct");
  const gridItemChildren = Array.from(gridItem.childNodes);

  // Get latest player image
  const playerImg = gridItemChildren[0];
  playerImg.src = `https://assets.nhle.com/mugs/nhl/latest/${player.playerId}.png`;
  const playerName = gridItemChildren[1];
  playerName.textContent = `${player.firstName.default} ${player.lastName.default}`;
};

/**
 *
 * @param {*} index
 * @returns
 */
const getRow = (index) => {
  return Math.floor(index / 3);
};

/**
 *
 * @param {*} index
 * @returns
 */
const getCol = (index) => {
  return index % 3;
};

export { addPlayer, getRow, getCol };
