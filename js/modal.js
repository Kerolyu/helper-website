const closeModalButton = document.querySelector(".close-modal");
const backgroundBlur = document.querySelector(".background-blur");
const modalLogIn = document.querySelector(".log-in-modal");
const openModalButton = document.querySelector(".login-button");

function toggleModalVisibility() {
  modalLogIn.classList.toggle("modal-hidden");
  backgroundBlur.classList.toggle("modal-hidden");
}

closeModalButton.addEventListener("click", toggleModalVisibility);
openModalButton.addEventListener("click", toggleModalVisibility);
backgroundBlur.addEventListener("click", toggleModalVisibility);
