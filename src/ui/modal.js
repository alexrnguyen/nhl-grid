/**
 * Toggles the visibility of a modal
 * @param {*} modal Modal to toggle
 */
const toggleModal = (modal) => {
    const overlay = document.getElementById("overlay");
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
};

export { toggleModal };