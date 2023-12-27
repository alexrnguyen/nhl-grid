/**
 * Choose categories for a given axis (either row or column)
 * @param {*} axis Specifies whether a category is a row or column category. Must be either 'row' or 'col'
 */
const chooseCategories = async (axis) => {
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

/**
 * Generate a random category
 * @param {*} category Category HTML element
 */
const randomCategory = async (category) => {
  const response = await fetch("/api/teams");
  const teamAbbreviations = await response.json();
  // Get a random team's abbreviation and store it in the category's dataset
  const randNum = Math.floor(Math.random() * 30);
  const randomTeam = teamAbbreviations[randNum];

  const teamAbbreviation = randomTeam;
  if (checkCategories(teamAbbreviation)) {
    category.dataset.team = teamAbbreviation;
    category.src = `https://assets.nhle.com/logos/nhl/svg/${teamAbbreviation}_dark.svg`;
  } else {
    // Category chosen is an inactive team. Choose another category
    await randomCategory(category);
  }
};

/**
 * Ensures that a category is not used before it is set
 * @param {*} teamAbbreviation Abbreviation of NHL team (3 characters)
 * @returns True if a category has not been used on the game board, false otherwise
 */
const checkCategories = (teamAbbreviation) => {
  const categories = document.querySelectorAll(".category");
  let validCategory = true;

  // Ensure that no team is chosen more than once!
  Array.from(categories).forEach((category) => {
    if (category.dataset.team === teamAbbreviation) {
      validCategory = false;
    }
  });
  return validCategory;
};

export { chooseCategories };
