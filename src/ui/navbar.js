import QuestionMark from "../assets/question-mark.svg"

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

    navbar.appendChild(logo);
    navbar.appendChild(helpButton);

    return navbar;
}

export default createNavbar;