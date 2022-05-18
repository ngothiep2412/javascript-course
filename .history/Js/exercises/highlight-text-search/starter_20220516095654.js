window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const item = this.document.querySelectorAll(".dropdown-item");
  input.addEventListener("keypress", handleHighlight);
  let filter = "";
  function handleHighlight(e) {
    filter = filter + e.key;
    filter = filter.toLowerCase();
    [...item].forEach((item) => {
      const text = item.textContent;
    });
  }
});
