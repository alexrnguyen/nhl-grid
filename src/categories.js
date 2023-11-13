import axios from "axios";
import { generateAbbreviationMap } from "./controllers/game-controller";
const createCategories = async (axis) => {
  const categories = document.createElement("div");
  categories.id = `${axis}-categories`;

  const content = document.getElementById("content");
  content.appendChild(categories);

  for (let i = 0; i < 3; i++) {
    const category = document.createElement("img");
    category.classList.add("category");
    category.classList.add(axis);
    await randomCategory(category);
    categories.appendChild(category);
  }
};

const randomCategory = async (category) => {
  const teamsAbbreviations = await getTeams();
  // Get a random team's abbreviation and store it in the category's dataset
  const randNum = Math.floor(Math.random() * 30);
  const randomTeam = teamsAbbreviations[randNum];

  const teamAbbreviation = randomTeam;
  if (checkCategories(teamAbbreviation)) {
    category.dataset.team = teamAbbreviation;
    category.src = `https://assets.nhle.com/logos/nhl/svg/${teamAbbreviation}_dark.svg`;
  } else {
    // Category chosen is an inactive team. Choose another category
    await randomCategory(category);
  }
};

// Ensure that no team is chosen more than once!
const checkCategories = (teamAbbreviation) => {
  const categories = document.querySelectorAll(".category");
  let validCategory = true;
  Array.from(categories).forEach((category) => {
    if (category.dataset.team === teamAbbreviation) {
      validCategory = false;
    }
  });
  return validCategory;
};

const getTeams = async () => {
  const response = await axios.get("https://api.nhle.com/stats/rest/en/team");
  const teams = response.data;
  const abbreviationToTeamMap = generateAbbreviationMap();
  let teamsAbbreviations = [];
  teams.forEach((team) => {
    if (abbreviationToTeamMap.keys().includes(team.triCode)) {
      teamsAbbreviations.push(team.triCode);
    }
  });
  return teams;
};

export { createCategories, getTeams };
