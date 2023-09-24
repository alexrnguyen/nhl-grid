import axios from "axios";
import { clearSearchResults } from "../ui/search-modal";
const searchPlayer = async (playerId) => {
  // TO-DO: Handle errors for this request
  const playerObject = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/people/${playerId}`
  );
  const player = playerObject.data.people[0];
  return player;
};

const getBirthDate = async (playerId) => {
  const playerObject = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/people/${playerId}`
  );
  const birthDate = playerObject.data.people[0].birthDate;
  return birthDate;
};

const getSearchResults = async (playerName) => {
  // TO-DO: Handle errors for this request
  await fetch(`/api/search-player`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: playerName }),
  });
  // TO-DO: Handle errors for this request
  const request = await fetch(`/api/get-player`);
  let data = await request.json();
  clearSearchResults();
  return data;
};

export { searchPlayer, getBirthDate, getSearchResults };
