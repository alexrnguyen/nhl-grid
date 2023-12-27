import { toggleModal } from "./modal";

/**
 * Creates the modal displayed when the user wins the game
 * @returns Modal displayed when the user wins the game
 */
const createWinnerModal = () => {
  const winnerModal = document.createElement("div");
  winnerModal.classList.add("modal");
  winnerModal.classList.add("hidden");
  winnerModal.id = "winner-modal";

  const closeButton = document.createElement("button");
  closeButton.className = "close-modal";
  closeButton.textContent = "X";

  closeButton.addEventListener("click", () => {
    toggleModal(winnerModal);
  });

  const text = document.createElement("p");
  text.id = "winner-text";
  text.textContent = "You Win!";

  winnerModal.appendChild(closeButton);
  winnerModal.appendChild(text);
  return winnerModal;
};

/**
 * Toggles the winner modal
 */
const triggerWinnerModal = () => {
  const winnerModal = document.getElementById("winner-modal");
  toggleModal(winnerModal);
};

export { createWinnerModal, triggerWinnerModal };
