import { getPlayerId } from "@nhl-api/players";
import nhlApi from "@nhl-api/client";
const searchPlayer = async (playerName) => {
  let playerId = getPlayerId(playerName);
  if (typeof playerId === "object") {
    playerId = playerId[0].id;
  }
  const response = await nhlApi.getPlayer({ id: playerId });
  console.log(response);
  return response;
};

export { searchPlayer };
