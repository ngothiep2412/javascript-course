window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handleHover);
  const imageWrapper = document.querySelector(".image-wrapper");
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;
  const image = document.querySelector(".image");
  function handleHover(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width: auto; height: auto; max-height: unset";
    let imageWitdh = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let x = pX;
    let y = pY;
    image.style = `left: ${-x}px; top: ${0}px; width: auto; height: auto; max-height: unset`;
  }
});
