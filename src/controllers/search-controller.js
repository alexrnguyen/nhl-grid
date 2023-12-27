import { clearSearchResults } from "../ui/search-modal";

/**
 * Get search results for a given player from the NHL API
 * @param {*} playerName Name of player to search for
 * @returns Data from search results retrieved from the NHL API
 */
const getSearchResults = async (playerName) => {
  // TO-DO: Handle errors for this request
  const response = await fetch(`/api/search/${playerName}`);
  let data = await response.json();
  clearSearchResults();
  return data;
};

export { getSearchResults };
