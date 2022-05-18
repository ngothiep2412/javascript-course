document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScroll = window.pageYOffset;
    console.log(windowScroll)
    [...images].forEach((item) => {

    });
  });
});
