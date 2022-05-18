const links = [...document.querySelectorAll(".menu-link")];
window.addEventListener("load", function () {
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");

  function handleHoverLink(e) {
    console.log(e.target);
  }
});
