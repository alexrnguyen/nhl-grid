import axios from "axios";
import { triggerWinnerModal } from "../ui/game-over-modal";

// Verify that a given player has played for both teams given as arguments
const checkPlayer = async (team1, team2, player) => {
  const abbreviationToTeamMap = generateAbbreviationMap();

  const team1Name = abbreviationToTeamMap[team1];
  const team2Name = abbreviationToTeamMap[team2];
  const teams = await getPlayerTeams(player);

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

// Retrieve list of all teams a player has played for
const getPlayerTeams = async (player) => {
  const playerId = player.id;
  let allTeams = [];
  await axios
    .get(`https://api-web.nhle.com/v1/player/${playerId}/landing`)
    .then((response) => response.data)
    .then((data) => {
      const seasonTotals = data.seasonTotals;
      Array.from(seasonTotals).forEach((season) => {
        allTeams.push(season.teamName.default);
      });
    });

  let distinctTeams = [...new Set(allTeams)];
  return distinctTeams;
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
  abbreviationToTeamMap["ANA"] = "Ducks";
  abbreviationToTeamMap["ARI"] = "Coyotes";
  abbreviationToTeamMap["BOS"] = "Bruins";
  abbreviationToTeamMap["BUF"] = "Sabres";
  abbreviationToTeamMap["CAR"] = "Hurricanes";
  abbreviationToTeamMap["CBJ"] = "Blue Jackets";
  abbreviationToTeamMap["CGY"] = "Flames";
  abbreviationToTeamMap["CHI"] = "Blackhawks";
  abbreviationToTeamMap["COL"] = "Avalanche";
  abbreviationToTeamMap["DAL"] = "Stars";
  abbreviationToTeamMap["DET"] = "Red Wings";
  abbreviationToTeamMap["EDM"] = "Oilers";
  abbreviationToTeamMap["FLA"] = "Panthers";
  abbreviationToTeamMap["LAK"] = "Kings";
  abbreviationToTeamMap["MIN"] = "Wild";
  abbreviationToTeamMap["MTL"] = "Canadiens";
  abbreviationToTeamMap["NJD"] = "Devils";
  abbreviationToTeamMap["NSH"] = "Predators";
  abbreviationToTeamMap["NYI"] = "Islanders";
  abbreviationToTeamMap["NYR"] = "Rangers";
  abbreviationToTeamMap["OTT"] = "Senators";
  abbreviationToTeamMap["PHI"] = "Flyers";
  abbreviationToTeamMap["PIT"] = "Penguins";
  abbreviationToTeamMap["SEA"] = "Kraken";
  abbreviationToTeamMap["SJS"] = "Sharks";
  abbreviationToTeamMap["STL"] = "Blues";
  abbreviationToTeamMap["TBL"] = "Lightning";
  abbreviationToTeamMap["TOR"] = "Leafs";
  abbreviationToTeamMap["VAN"] = "Canucks";
  abbreviationToTeamMap["VGK"] = "Golden Knights";
  abbreviationToTeamMap["WPG"] = "Jets";
  abbreviationToTeamMap["WSH"] = "Capitals";
  return abbreviationToTeamMap;
};

export { checkPlayer, checkGameOver };
