const links = [...document.querySelectorAll(".menu-link")];
window.addEventListener("load", function () {
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  this.document.body.appendChild(line);
  function handleHoverLink(e) {
    console.log(e.target);
  }
});
