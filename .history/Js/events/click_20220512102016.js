// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
// function handlerClick() {
//   console.log("click me");
// }
// // Lỗi sai khi dùng function vào eventListener
// // button.addEventListener("click", handlerClick());

// // Đúng
// button.addEventListener("click", handlerClick);
// // span.addEventListener(
// //   "click",
// //   function (e) {
// //     //   e.stopPropagation
// //     e.stopImmediatePropagation();
// //     console.log("click span");
// //   },
// //   {
// //     capture: true,
// //   }
// // );
// // event: e
// span.addEventListener("click", function () {
//   console.log("click span 2");
// });
// document.body.addEventListener("click", function () {
//   console.log("click body");
// });
// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
// target vs currentTarget
button.addEventListener("click", function (e) {
  console.log(`event.target: ${e.target}`);
  // event.target: nó sẽ chọn chính xác element mà mình click tới
  console.log(`event.currentTarget: ${e.currentTarget}`);
  // event.currentTarget: nó sẽ chọn phần tử mà mình click
});
// event.preventDefault();
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  // Lấy custom attribute data-abc
  // .dataset.name
  const name = e.target.dataset.name;
  console.log(name);
  e.target;
  // console.log("click me");
  // // selector.style.property = value
  // // event.target.style.property = value
  // console.log(e.target);
  // console.log(e.target.style);
  // e.target.style.color = "red";
});

//
