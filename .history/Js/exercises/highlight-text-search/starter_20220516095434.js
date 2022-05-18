window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  input.addEventListener("keypress", handleHighlight);
  let filter = "";
  function handleHighlight(e) {
    console.log(e.key);
  }
});
