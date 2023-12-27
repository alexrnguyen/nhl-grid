/**
 * Adds a player's name and image to the game board
 * @param {*} gridItem Grid item where the player's name and image is added 
 * @param {*} player JSON object containing information about a player
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
 * Gets the row of an index
 * @param {*} index Index of a grid item on game board
 * @returns Row of index
 */
const getRow = (index) => {
  return Math.floor(index / 3);
};

/**
 * Gets the column of an index
 * @param {*} index Index of a grid item on game board
 * @returns Column of index
 */
const getCol = (index) => {
  return index % 3;
};

export { addPlayer, getRow, getCol };
