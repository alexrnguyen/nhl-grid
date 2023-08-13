import { getPlayerMugshot } from "@nhl-api/players";
import { getTeamId } from "@nhl-api/teams";
import axios from "axios";

const addPlayer = (gridItem, player) => {
  console.log(player);
  const gridItemChildren = Array.from(gridItem.childNodes);
  const playerImg = gridItemChildren[0];
  const teamId = player.currentTeam.id;

  axios
    .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`)
    .then((response) => response.data)
    .then((data) => {
      const abbreviation = data.teams[0].abbreviation;
      console.log(data);
      playerImg.src = getPlayerMugshot({
        name: player.fullName,
        team: abbreviation,
        season: "20222023",
      }); // Testing purposes

      const playerName = gridItemChildren[1];
      playerName.textContent = player.fullName;
    });
};

export { addPlayer };
