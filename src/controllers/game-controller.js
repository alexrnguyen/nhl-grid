import axios from "axios";
import { triggerWinnerModal } from "../ui/game-over-modal";

// Verify that a given player has played for both teams given as arguments
const checkPlayer = async (team1, team2, player) => {
  const abbreviationToTeamMap = generateAbbreviationMap();

  const team1Name = abbreviationToTeamMap[team1];
  const team2Name = abbreviationToTeamMap[team2];
  const teams = await fetch(`/api/player/teams/${player.playerId}`);

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

const checkGameOver = () => {
  if (allFilled()) {
    triggerWinnerModal();
  }
};

const allFilled = () => {
  const allGridItems = document.querySelectorAll(".grid-item");
  return Array.from(allGridItems).every((gridItem) =>
    gridItem.classList.contains("correct")
  );
};

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

// Generates a map that maps every team abbreviation to a team name
const generateAbbreviationMap = () => {
  const abbreviationToTeamMap = new Map();
  abbreviationToTeamMap.set("ANA", "Ducks");
  abbreviationToTeamMap.set("ARI", "Coyotes");
  abbreviationToTeamMap.set("BOS", "Bruins");
  abbreviationToTeamMap.set("BUF", "Sabres");
  abbreviationToTeamMap.set("CAR", "Hurricanes");
  abbreviationToTeamMap.set("CBJ", "Blue Jackets");
  abbreviationToTeamMap.set("CGY", "Flames");
  abbreviationToTeamMap.set("CHI", "Blackhawks");
  abbreviationToTeamMap.set("COL", "Avalanche");
  abbreviationToTeamMap.set("DAL", "Stars");
  abbreviationToTeamMap.set("DET", "Red Wings");
  abbreviationToTeamMap.set("EDM", "Oilers");
  abbreviationToTeamMap.set("FLA", "Panthers");
  abbreviationToTeamMap.set("LAK", "Kings");
  abbreviationToTeamMap.set("MIN", "Wild");
  abbreviationToTeamMap.set("MTL", "Canadiens");
  abbreviationToTeamMap.set("NJD", "Devils");
  abbreviationToTeamMap.set("NSH", "Predators");
  abbreviationToTeamMap.set("NYI", "Islanders");
  abbreviationToTeamMap.set("NYR", "Rangers");
  abbreviationToTeamMap.set("OTT", "Senators");
  abbreviationToTeamMap.set("PHI", "Flyers");
  abbreviationToTeamMap.set("PIT", "Penguins");
  // abbreviationToTeamMap.set("SEA", "Kraken");
  abbreviationToTeamMap.set("SJS", "Sharks");
  abbreviationToTeamMap.set("STL", "Blues");
  abbreviationToTeamMap.set("TBL", "Lightning");
  abbreviationToTeamMap.set("TOR", "Leafs");
  abbreviationToTeamMap.set("VAN", "Canucks");
  // abbreviationToTeamMap.set("VGK", "Golden Knights");
  abbreviationToTeamMap.set("WPG", "Jets");
  abbreviationToTeamMap.set("WSH", "Capitals");
  return abbreviationToTeamMap;
};

export { checkPlayer, checkGameOver, generateAbbreviationMap };
