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
// 2. keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra (keyup ko có preventDefault)
// input.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });
// 3. keypress: Sự kiện này sẽ xảy ra khi các bạn nhấn phím
// keypress ignore các phím như detele, mũi tên, page up, page down, end, ctrl, alt, shift, etc...
// input.addEventListener("keypress", function (e) {
//   console.log(e.key);
//   if (e.key === "Control") {
//     console.log("Not working!!!");
//   }
// });
// Thứ tự ưu tiên keydown -> keypress -> keyup
// 4. change: xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function (e) {
  //   console.log("Working");
});
// 5. focus:
input.addEventListener("focus", function (e) {
  //   console.log("Input is focusing");
});
// 6. blur:
input.addEventListener("blur", function (e) {
  //   console.log("input is blur");
});
// 7. submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value === "") {
    alert("You can not make empty input");
  }
});
