import axios from "axios";
const createCategories = async (axis) => {
  const categories = document.createElement("div");
  categories.id = `${axis}-categories`;

  for (let i = 0; i < 3; i++) {
    const category = document.createElement("img");
    category.classList.add("category");
    category.classList.add(axis);
    await randomCategory(category);
    categories.appendChild(category);
  }

  return categories;
};

const randomCategory = async (category) => {
  const teamIds = await getTeams();
  const randNum = Math.floor(Math.random() * 32);
  const randomTeam = teamIds[randNum];
  category.src = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${randomTeam}.svg`;

  // Get the team's abbreviation and store it in the category's dataset
  const response = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/teams/${randomTeam}`
  );

  const teamAbbreviation = response.data.teams[0].abbreviation;
  category.dataset.team = teamAbbreviation;
};

// Ensure that no team is chosen more than once!
const checkCategories = () => {};

const getTeams = async () => {
  const response = await axios.get(
    "https://statsapi.web.nhl.com/api/v1/teams/"
  );

  const teams = response.data.teams;
  let teamIds = [];
  teams.forEach((team) => {
    teamIds.push(team.id);
  });
  return teamIds;
};

export { createCategories };
