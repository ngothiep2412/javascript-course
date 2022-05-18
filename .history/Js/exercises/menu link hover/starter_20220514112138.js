const links = [...document.querySelectorAll(".menu-links")];
window.addEventListener("load", function () {
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  function handleHoverLink(e) {
    console.log(e.target);
  }
});
