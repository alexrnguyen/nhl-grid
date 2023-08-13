import { getPlayerId } from "@nhl-api/players";
import nhlApi from "@nhl-api/client";
const searchPlayer = async (playerName) => {
  let playerId = getPlayerId(playerName);
  if (playerId instanceof Array) {
    playerId = playerId[0].id;
  }
  const response = await nhlApi.getPlayer({ id: playerId });
  return response;
};

export { searchPlayer };
