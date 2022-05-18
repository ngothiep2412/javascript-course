// 1. keydown: Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  //   console.log(e.keyCode);
  //   console.log(e.which);
  // ascii: MDN
  // e.key: key nhập vào
  //   if (e.key === "Enter") {
  // console.log("You hit enter");
  //   } else {
  // console.log(e.key);
  //   }
});
// 2. keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  console.log(e.key);
});
