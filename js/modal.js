const closeModalButton = document.querySelector(".close-modal");
const backgroundBlur = document.querySelector(".background-blur");
const modalLogIn = document.querySelector(".log-in-modal");
const openModalButton = document.querySelector(".login-button");
const modalTabsButtons = document.querySelectorAll(".modal-titles__option");
const tabs = document.querySelectorAll(".modal-tab");

function toggleModalVisibility() {
  modalLogIn.classList.toggle("modal-hidden");
  backgroundBlur.classList.toggle("modal-hidden");
}

closeModalButton.addEventListener("click", toggleModalVisibility);
openModalButton.addEventListener("click", toggleModalVisibility);
backgroundBlur.addEventListener("click", toggleModalVisibility);

modalTabsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalTabsButtons.forEach((Button) => {
      if (Button !== button) {
        Button.classList.remove("login-active");
      }
    });
    button.classList.add("login-active");
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.classList.toggle("hidden");
      } else if (tabIndex !== index) {
        tab.classList.add("hidden");
      }
    });
  });
});
