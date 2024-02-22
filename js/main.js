const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
document.addEventListener("DOMContentLoaded", function () {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
  });
});

const warningInfo = document.querySelector(".caclulator-warning");
let extraInfo;

warningInfo.addEventListener("mouseover", function () {
  if (!extraInfo) {
    extraInfo = document.createElement("p");
    extraInfo.classList.add("error-style");
    extraInfo.innerText = "To get more accurate information contact us on the Help page.";
    warningInfo.prepend(extraInfo);
  }
});

warningInfo.addEventListener("mouseout", function () {
  if (extraInfo) {
    extraInfo.remove();
    extraInfo = null;
  }
});
