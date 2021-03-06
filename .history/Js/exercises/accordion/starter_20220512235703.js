const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(e) {
  console.log(e.target);
  const content = e.target.nextElementSibling;
  content.classList.toggle("is-active");
  // scrollHeight: chiều cao của phần tử bao gồm padding
  content.style.height = `${content.scrollHeight}px`;
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.add("fa-angle-up");
}
