const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownCarer = document.querySelector(".dropdown__caret");
// Dropdown select
dropdownSelect.addEventListener("click", function (e) {
  dropdownList.classList.toggle("show");
});

// Dropdown item
dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
    dropdownCarer.classList.toggle(".fa-caret-down");
    dropdownCarer.classList.toggle(".fa-caret-up");
  })
);

// Click to document
document.addEventListener("click", function (e) {
  console.log(e.target);
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove("show");
  }
});
