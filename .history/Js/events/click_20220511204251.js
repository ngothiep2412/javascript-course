// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handlerClick() {
  console.log("click me");
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handlerClick());

// Đúng
button.addEventListener("click", handlerClick);
span.addEventListener("click", function () {
  console.log("click span");
});
document.body;
// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
