const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
document.addEventListener("DOMContentLoaded", function () {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
  });
});
