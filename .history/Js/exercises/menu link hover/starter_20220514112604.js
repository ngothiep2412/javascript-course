const links = [...document.querySelectorAll(".menu-link")];
window.addEventListener("load", function () {
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    console.log({ left, top, width, height });
    line.style.width = `${width}px`;
  }
});
