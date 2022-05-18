/*

*/
const images = document.querySelectorAll(".content img");
[...images].forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(e) {
  console.log(e.target);
  const image = e.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
    <img src="${image}" alt="" class="lightbox-image" />
  </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
document.body.addEventListener("click", function (e) {
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  }
});
