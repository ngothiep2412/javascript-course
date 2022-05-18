window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  input.addEventListener("keypress", handleHighlight);
  let filter = "";
  function handleHighlight(e) {
    filter = filter + e.key;
    filter = filter.toLowerCase();
  }
});
