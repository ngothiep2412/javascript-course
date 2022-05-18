document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
});
const p = document.querySelector("p");
console.log(p);
// Nếu để đưa thẻ script lên trước thì nó sẽ bị blocking page
// dùng defer: non-blocking page
// async: ko bị blocking page, bất đồng bộ, chạy độc lập. Dùng trong trường hợp ở bên thứ 3

//removeEventListener
// const button = document.querySelector(".button");
// function handleMouseMove(e) {
//   console.log(e.clientX);
// }
// document.addEventListener("mousemove", handleMouseMove);
// button.addEventListener("click", function () {
//   document.removeEventListener("mousemove", handleMouseMove);
// });

function handleClick() {
  console.log("clicked");
}
button.onClick = handleClick;
