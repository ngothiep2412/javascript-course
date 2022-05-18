const links = [...document.querySelectorAll(".menu-link")];
window.addEventListener("load", function () {
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    console.log({ left, top, width, height });
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height}px`;
  }
});
