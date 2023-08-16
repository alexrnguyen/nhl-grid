import { getPlayerId } from "@nhl-api/players";
import nhlApi from "@nhl-api/client";
import axios from "axios";
const searchPlayer = async (playerName) => {
  await fetch(`http://localhost:3000/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: playerName }),
  });
  console.log("Response over!");
  const request = await fetch(`http://localhost:3000/`);
  let data = await request.json();
  data = data[0];
  console.log(data);

  const playerId = Number(data.split("|")[0]);

  const playerObject = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/people/${playerId}`
  );
  const player = playerObject.data.people[0];
  return player;
};

export { searchPlayer };
