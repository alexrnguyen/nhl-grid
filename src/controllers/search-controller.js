import { clearSearchResults } from "../ui/search-modal";

const getSearchResults = async (playerName) => {
  // TO-DO: Handle errors for this request
  const response = await fetch(`/api/player/${playerName}`);
  let data = await response.json();
  clearSearchResults();
  return data;
};

export { getSearchResults };
