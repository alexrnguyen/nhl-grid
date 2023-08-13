const createSearchModal = () => {
  const searchModal = document.createElement("div");
  searchModal.id = "search-modal";
  searchModal.classList.add("hidden");
  const header = document.createElement("h1");
  header.id = "modal-header";

  const closeButton = document.createElement("button");
  closeButton.id = "close-modal";
  closeButton.textContent = "X";

  closeButton.addEventListener("click", () => {
    document.getElementById("search-player").value = "";
    toggleModal(searchModal);
  });

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for player...";
  searchInput.name = "search-player";
  searchInput.id = "search-player";

  searchModal.appendChild(closeButton);
  searchModal.appendChild(header);
  searchModal.appendChild(searchInput);
  return searchModal;
};

const triggerSearchModal = (index) => {
  const searchModal = document.getElementById("search-modal");
  toggleModal(searchModal);
  const header = document.getElementById("modal-header");
  header.textContent = index;
};

const toggleModal = (modal) => {
  const overlay = document.getElementById("overlay");
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");
  return overlay;
};

export { createSearchModal, triggerSearchModal, createOverlay };
