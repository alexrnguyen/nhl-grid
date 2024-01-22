import { toggleModal } from "./modal";

const createHelpModal = () => {
    const helpModal = document.createElement("div");
    helpModal.classList.add("modal");
    helpModal.classList.add("hidden");
    helpModal.id = "help-modal";

    const headerContainer = document.createElement("div");
    headerContainer.id = "modal-header-container";

    const closeButton = document.createElement("button");
    closeButton.className = "close-modal";
    closeButton.textContent = "X";

    closeButton.addEventListener("click", () => {
        toggleModal(helpModal);
    });

    const header = document.createElement("h1");
    header.textContent = "How to Play";

    headerContainer.appendChild(header);
    headerContainer.appendChild(closeButton);

    const instructionsList = getInstructions();

    helpModal.appendChild(headerContainer);
    helpModal.appendChild(instructionsList);

    return helpModal
}

const getInstructions = () => {
    const instructionsList = document.createElement("ul");
    instructionsList.id = "instructions";

    const instructions = [
        "Each cell on the grid has a row and column team",
        "Your goal is to name a player that has played for both the row team and the column team for each cell on the grid",
        "A player matches a team if they have played at least 1 regular season game with the team",
        "To guess a player, click on a square and use the search bar to enter the player you would like to guess. Click to submit button next to the player's name to lock in your guess",
        "The game ends once you have successfully named a player for each cell on the grid",
        "Have fun!"
    ]

    instructions.forEach((instruction) => {
        const instructionElement = document.createElement("li");
        instructionElement.textContent = instruction;
        instructionsList.appendChild(instructionElement);
    })

    return instructionsList;
}

export default createHelpModal