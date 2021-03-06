/*

*/
const images = document.querySelectorAll(".content img");
[...images].forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(e) {
  console.log(e.target);
  const image = e.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
  <i class="fa fa-angle-left lightbox-prev"></i>
    <img src="${image}" alt="" class="lightbox-image" />
    <i class="fa fa-angle-right lightbox-next"></i>
  </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.body.addEventListener("click", function (e) {
  const lightImage = document.querySelector(".lightbox-image");
  let lightSrc = "";
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    lightSrc = lightImage.getAttribute("src");
  } else if (e.target.matches(".lightbox-prev")) {
  }
});
