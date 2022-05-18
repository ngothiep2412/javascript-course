// addEventListener
const button = document.querySelector(".button");
function handlerClick() {
  console.log("click me");
}
button.addEventListener("click", handlerClick);
// Lỗi sai khi dùng function vào eventListener
