const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.remove("fa-bars");

  menu.classList.toggle("is-show");
}
