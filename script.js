// JS-файл или скрипт внизу HTML
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});