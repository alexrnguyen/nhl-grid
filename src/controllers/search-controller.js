import axios from "axios";
import { clearSearchResults } from "../ui/search-modal";
const searchPlayer = async (playerId) => {
  // TO-DO: Handle errors for this request
  const playerObject = await axios.get(
    `https://api-web.nhle.com/v1/player/${playerId}/landing`
  );
  const player = playerObject.data;
  return player;
};

const getBirthDate = async (playerId) => {
  const playerObject = await axios.get(
    `https://api-web.nhle.com/v1/player/${playerId}/landing`
  );
  const birthDate = playerObject.data.birthDate;
  return birthDate;
};

const getSearchResults = async (playerName) => {
  // TO-DO: Handle errors for this request
  const response = await fetch(`/api/player/${playerName}`);
  let data = await response.json();
  clearSearchResults();
  return data;
};

export { searchPlayer, getBirthDate, getSearchResults };
