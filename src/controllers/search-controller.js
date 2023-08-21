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

const getSearchResults = async (playerName) => {
  clearSearchResults();
  // TO-DO: Handle errors for this request
  await fetch(`http://localhost:3000/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: playerName }),
  });

  // TO-DO: Handle errors for this request
  const request = await fetch(`http://localhost:3000/`);
  let data = await request.json();
  return data;
};

export { searchPlayer, getSearchResults };
