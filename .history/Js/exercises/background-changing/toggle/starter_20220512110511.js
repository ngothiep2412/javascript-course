const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(e) {
  console.log(e.target);
  console.log(menu);
  //e.target.contains
  // selector.contains: kiểm tra element có chứa element khác không
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
  }
}
