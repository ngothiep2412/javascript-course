const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(e) {
  e.target.clasList.add("fa-times");
  menu.classList.toggle("is-show");
}
