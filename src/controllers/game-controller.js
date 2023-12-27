import { triggerWinnerModal } from "../ui/game-over-modal";

/**
 * Verify that a given player has played for both teams given as arguments. Display a window alert
 * if a player has not played for both team1 and team2.
 * @param {*} team1 First team to check for (a category on the grid)
 * @param {*} team2 Second team to check for (a category on the grid)
 * @param {*} player Player to check
 * @returns True if a player has played for both teams, false otherwise
 */
const checkPlayer = async (team1, team2, player) => {
  const abbreviationToTeamMap = generateAbbreviationMap();

  const team1Name = abbreviationToTeamMap.get(team1);
  const team2Name = abbreviationToTeamMap.get(team2);
  console.log(team1Name, team2Name);
  const teamsResponse = await fetch(`/api/player/teams/${player.playerId}`);
  const teams = await teamsResponse.json();

  let playedForTeam1 = false;
  let playedForTeam2 = false;
  for (const team of Array.from(teams)) {
    if (team === team1Name) {
      playedForTeam1 = true;
    } else if (team === team2Name) {
      playedForTeam2 = true;
    }
  }
  if (playedForTeam1 && playedForTeam2 && !checkIfPlayerUsed(player.fullName)) {
    return true;
  } else {
    if (!playedForTeam1 || !playedForTeam2) {
      window.alert("Incorrect");
    }
    return false;
  }
};

/**
 * Displays winner modal if all cells have a player
 */
const checkGameOver = () => {
  if (allFilled()) {
    triggerWinnerModal();
  }
};

/**
 * Check if all cells have a player assigned to them
 * @returns True if all cells have a player assigned to them, false otherwise
 */
const allFilled = () => {
  const allGridItems = document.querySelectorAll(".grid-item");
  return Array.from(allGridItems).every((gridItem) =>
    gridItem.classList.contains("correct")
  );
};

/**
 * Checks if the player is being used in another cell
 * @param {*} player Player to check
 * @returns True if the player is being used in another cell, false otherwise 
 */
const checkIfPlayerUsed = (player) => {
  const playersUsed = document.querySelectorAll(".player-name");
  const namesOfPlayers = [];

  playersUsed.forEach((player) => {
    if (player.textContent !== "") {
      namesOfPlayers.push(player.textContent);
    }
  });
  if (namesOfPlayers.includes(player)) {
    window.alert(`You have already used ${player}!`);
    return true;
  } else {
    return false;
  }
};

/**
 * Generates a map that maps every team abbreviation to a team
 * @returns Team abbreviation to team map
 */
const generateAbbreviationMap = () => {
  const abbreviationToTeamMap = new Map();
  abbreviationToTeamMap.set("ANA", "Anaheim Ducks");
  abbreviationToTeamMap.set("ARI", "Arizona Coyotes");
  abbreviationToTeamMap.set("BOS", "Boston Bruins");
  abbreviationToTeamMap.set("BUF", "Buffalo Sabres");
  abbreviationToTeamMap.set("CAR", "Carolina Hurricanes");
  abbreviationToTeamMap.set("CBJ", "Columbus Blue Jackets");
  abbreviationToTeamMap.set("CGY", "Calgary Flames");
  abbreviationToTeamMap.set("CHI", "Chicago Blackhawks");
  abbreviationToTeamMap.set("COL", "Colorado Avalanche");
  abbreviationToTeamMap.set("DAL", "Dallas Stars");
  abbreviationToTeamMap.set("DET", "Detroit Red Wings");
  abbreviationToTeamMap.set("EDM", "Edmonton Oilers");
  abbreviationToTeamMap.set("FLA", "Florida Panthers");
  abbreviationToTeamMap.set("LAK", "Los Angeles Kings");
  abbreviationToTeamMap.set("MIN", "Minnesota Wild");
  abbreviationToTeamMap.set("MTL", "Montréal Canadiens");
  abbreviationToTeamMap.set("NJD", "New Jersey Devils");
  abbreviationToTeamMap.set("NSH", "Nashville Predators");
  abbreviationToTeamMap.set("NYI", "New York Islanders");
  abbreviationToTeamMap.set("NYR", "New York Rangers");
  abbreviationToTeamMap.set("OTT", "Ottawa Senators");
  abbreviationToTeamMap.set("PHI", "Philadelphia Flyers");
  abbreviationToTeamMap.set("PIT", "Pittsburgh Penguins");
  // abbreviationToTeamMap.set("SEA", "Seattle Kraken");
  abbreviationToTeamMap.set("SJS", "San Jose Sharks");
  abbreviationToTeamMap.set("STL", "St. Louis Blues");
  abbreviationToTeamMap.set("TBL", "Tampa Bay Lightning");
  abbreviationToTeamMap.set("TOR", "Toronto Maple Leafs");
  abbreviationToTeamMap.set("VAN", "Vancouver Canucks");
  // abbreviationToTeamMap.set("VGK", "Vegas Golden Knights");
  abbreviationToTeamMap.set("WPG", "Winnipeg Jets");
  abbreviationToTeamMap.set("WSH", "Washington Capitals");
  return abbreviationToTeamMap;
};

export { checkPlayer, checkGameOver, generateAbbreviationMap };
