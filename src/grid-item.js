import { getPlayerMugshot } from "@nhl-api/players";
import { getTeamId } from "@nhl-api/teams";
import axios from "axios";

const addPlayer = (gridItem, player) => {
  const gridItemChildren = Array.from(gridItem.childNodes);
  const playerImg = gridItemChildren[0];
  const isActive = player.active;

  let teamId = 0;
  if (isActive) {
    teamId = player.currentTeam.id;
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`)
      .then((response) => response.data)
      .then((data) => {
        const abbreviation = data.teams[0].abbreviation;
        playerImg.src = `https://assets.nhle.com/mugs/nhl/20222023/${abbreviation}/${player.id}.png`;
      });
  } else {
    getLastTeam(playerImg, player.id);
  }
  const playerName = gridItemChildren[1];
  playerName.textContent = player.fullName;
};

const getRow = (index) => {
  return Math.floor(index / 3);
};

const getCol = (index) => {
  return index % 3;
};

const getLastTeam = (playerImg, playerId) => {
  axios
    .get(
      `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats/?stats=yearByYear`
    )
    .then((response) => response.data)
    .then((data) => {
      const lastYear = data["stats"][0]["splits"].pop();
      const lastSeason = lastYear.season;
      const teamId = lastYear.team.id;
      axios
        .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`)
        .then((response) => response.data)
        .then((data) => {
          const abbreviation = data.teams[0].abbreviation;
          playerImg.src = `https://assets.nhle.com/mugs/nhl/${lastSeason}/${abbreviation}/${playerId}.png`;
        });
    });
};

export { addPlayer, getRow, getCol };
