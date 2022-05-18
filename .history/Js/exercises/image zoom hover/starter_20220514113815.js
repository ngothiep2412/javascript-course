window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handleHover);
  function handleHover(e) {
    console.log(e.target);
  }
});
