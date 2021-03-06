const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(e) {
  console.log(e.target);
  e.target.nextElementSibling.classList.toggle("is-active");
  const icon = e.target.querySelector(".icon");
  icon.classList.remove("fa-angle-down");

  icon.classList.add("fa-angle-up");
}
