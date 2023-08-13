import axios from "axios";
const createCategories = (axis) => {
  const categories = document.createElement("div");
  categories.id = `${axis}-categories`;

  for (let i = 0; i < 3; i++) {
    const category = document.createElement("img");
    category.classList.add("category");
    randomCategory(category);
    categories.appendChild(category);
  }

  return categories;
};

const randomCategory = async (category) => {
  const teamIds = await getTeams();
  const randNum = Math.floor(Math.random() * 32);
  const randomTeam = teamIds[randNum];
  category.src = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${randomTeam}.svg`;
  //return categoryImg;
};

// Source: https://stackoverflow.com/questions/11753485/set-img-src-to-dynamic-svg-element
const setImageToSVG = (img, svg) => {
  const xml = new XMLSerializer().serializeToString(svg);
  img.src = "data:image/svg+xml;charset=utf-8," + xml;
};

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
