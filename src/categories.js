import axios from "axios";
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
  const teamIds = await getTeams();
  const randNum = Math.floor(Math.random() * 30);
  const randomTeam = teamIds[randNum];

  // Get the team's abbreviation and store it in the category's dataset
  const response = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/teams/${randomTeam}`
  );

  const teamAbbreviation = response.data.teams[0].abbreviation;
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
  const response = await axios.get(
    "https://statsapi.web.nhl.com/api/v1/teams/"
  );

  const teams = response.data.teams;
  let teamIds = [];
  teams.forEach((team) => {
    // Do not add Seattle and Vegas to the array of valid team ids
    if (
      team.name !== "Seattle Kraken" &&
      team.name !== "Vegas Golden Knights"
    ) {
      teamIds.push(team.id);
    }
  });
  return teamIds;
};

export { createCategories, getTeams };
