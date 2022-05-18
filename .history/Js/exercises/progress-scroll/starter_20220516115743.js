const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  // Tính chiều cao thật của document
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}px`;
});
