/*
<div class="lightbox">
      <div class="lightbox-content">
        <img src="" alt="" class="lightbox-image" />
      </div>
    </div>
*/
const images = document.querySelectorAll(".content img");
[...images].forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(e) {
  console.log(e.target);
}
