// Modal Setup
"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const addGlobalEventListener = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    } else if (e.key === selector) {
      callback(e);
    }
  });
};

addGlobalEventListener("click", ".overlay", () => {
  closeModal();
});

addGlobalEventListener("keydown", "Escape", () => {
  closeModal();
});

addGlobalEventListener("click", ".close-modal", () => {
  closeModal();
});

addGlobalEventListener("click", ".show-modal", () => {
  openModal();
});
