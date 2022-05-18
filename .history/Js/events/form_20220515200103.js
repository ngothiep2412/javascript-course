// 1. keydown: Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.keyCode);
  //   console.log(e.which);
  // ascii: MDN
  // e.key: key nhập vào
  if (e.key === "enter") {
    console.log("You hit enter");
  }
});
