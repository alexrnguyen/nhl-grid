import { getPlayerId } from "@nhl-api/players";
import nhlApi from "@nhl-api/client";
import axios from "axios";
const searchPlayer = async (playerName) => {
  let playerId = getPlayerId(playerName);
  console.log(playerId);
  if (typeof playerId === "object") {
    playerId = playerId[0].id;
  }
  console.log(playerName);
  const response = await nhlApi.getPlayer({ id: playerId });

  /*const formattedName = [...playerName.replace(" ", "%20")].join("");
  console.log(formattedName);
  const response = await fetch(`http://localhost:3000/`, {
    method: "POST",
    body: JSON.stringify({ parcel: formattedName }),
  });*/
  //console.log(response);
  return response;
};

export { searchPlayer };
