import QuestionMark from "../assets/question-mark.svg"
import { toggleModal } from "./modal";

const createNavbar = () => {
    // TODO: Add navbar containing: site name, instructions (how to play) 
    const navbar = document.createElement("div");
    navbar.id = "navbar";

    const logo = document.createElement("span");
    logo.id = "site-logo";
    logo.textContent = "NHL GRID";

    const helpButton = document.createElement("button");
    helpButton.id = "help-button";

    const helpIcon = new Image();
    helpIcon.src = QuestionMark;
    helpIcon.classList.add("icon");
    helpButton.appendChild(helpIcon);

    helpButton.addEventListener("click", () => {
        const helpModal = document.getElementById("help-modal");
        toggleModal(helpModal);
    })

    navbar.appendChild(logo);
    navbar.appendChild(helpButton);

    return navbar;
}

export default createNavbar;