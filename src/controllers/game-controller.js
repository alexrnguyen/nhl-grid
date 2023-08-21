import axios from "axios";
import { triggerWinnerModal } from "../ui/game-over-modal";

// Verify that a given player has played for both teams given as arguments
const checkPlayer = async (team1, team2, player) => {
  const abbreviationToTeamMap = generateAbbreviationMap();

  const team1Name = abbreviationToTeamMap[team1];
  const team2Name = abbreviationToTeamMap[team2];
  const teams = await getPlayerTeams(team1, team2, player);

  let playedForTeam1 = false;
  let playedForTeam2 = false;
  for (const team of Array.from(teams)) {
    if (team === team1Name) {
      playedForTeam1 = true;
    } else if (team === team2Name) {
      playedForTeam2 = true;
    }
  }
  console.log(playedForTeam1, playedForTeam2);
  if (playedForTeam1 && playedForTeam2) {
    return true;
  } else {
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
const getPlayerTeams = async (team1, team2, player) => {
  const playerId = player.id;
  let allTeams = [];
  await axios
    .get(
      `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats/?stats=yearByYear`
    )
    .then((response) => response.data)
    .then((data) => {
      const splits = data.stats[0].splits;
      Array.from(splits).forEach((season) => {
        allTeams.push(season.team.name);
      });
    });

  let distinctTeams = [...new Set(allTeams)];
  return distinctTeams;
};

// Generates a map that maps every team abbreviation to a team name
const generateAbbreviationMap = () => {
  const abbreviationToTeamMap = new Map();
  abbreviationToTeamMap["ANA"] = "Anaheim Ducks";
  abbreviationToTeamMap["ARI"] = "Arizona Coyotes";
  abbreviationToTeamMap["BOS"] = "Boston Bruins";
  abbreviationToTeamMap["BUF"] = "Buffalo Sabres";
  abbreviationToTeamMap["CAR"] = "Carolina Hurricanes";
  abbreviationToTeamMap["CBJ"] = "Columbus Blue Jackets";
  abbreviationToTeamMap["CGY"] = "Calgary Flames";
  abbreviationToTeamMap["CHI"] = "Chicago Blackhawks";
  abbreviationToTeamMap["COL"] = "Colorado Avalanche";
  abbreviationToTeamMap["DAL"] = "Dallas Stars";
  abbreviationToTeamMap["DET"] = "Detroit Red Wings";
  abbreviationToTeamMap["EDM"] = "Edmonton Oilers";
  abbreviationToTeamMap["FLA"] = "Florida Panthers";
  abbreviationToTeamMap["LAK"] = "Los Angeles Kings";
  abbreviationToTeamMap["MIN"] = "Minnesota Wild";
  abbreviationToTeamMap["MTL"] = "Montréal Canadiens";
  abbreviationToTeamMap["NJD"] = "New Jersey Devils";
  abbreviationToTeamMap["NSH"] = "Nashville Predators";
  abbreviationToTeamMap["NYI"] = "New York Islanders";
  abbreviationToTeamMap["NYR"] = "New York Rangers";
  abbreviationToTeamMap["OTT"] = "Ottawa Senators";
  abbreviationToTeamMap["PHI"] = "Philadelphia Flyers";
  abbreviationToTeamMap["PIT"] = "Pittsburgh Penguins";
  abbreviationToTeamMap["SEA"] = "Seattle Kraken";
  abbreviationToTeamMap["SJS"] = "San Jose Sharks";
  abbreviationToTeamMap["STL"] = "St. Louis Blues";
  abbreviationToTeamMap["TBL"] = "Tampa Bay Lightning";
  abbreviationToTeamMap["TOR"] = "Toronto Maple Leafs";
  abbreviationToTeamMap["VAN"] = "Vancouver Canucks";
  abbreviationToTeamMap["VGK"] = "Vegas Golden Knights";
  abbreviationToTeamMap["WPG"] = "Winnipeg Jets";
  abbreviationToTeamMap["WSH"] = "Washington Capitals";
  return abbreviationToTeamMap;
};

export { checkPlayer, checkGameOver };
