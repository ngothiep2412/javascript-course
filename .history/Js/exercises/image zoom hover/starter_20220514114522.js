window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handleHover);
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image");
  function handleHover(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width: auto; height: auto; max-height: unset";
    let imageWitdh = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let imageWrapperHeight = imageWrapper.offsetWidth
    let imageWrapperWidth = 
  }
});
