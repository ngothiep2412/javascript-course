document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop)
    [...images].forEach((item) => {

    });
  });
});
