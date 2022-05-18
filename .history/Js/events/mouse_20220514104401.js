const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mousemove
// button.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });
// mouseover: nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
// button.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });
// mouseenter: nó sẽ chạy khi rê chuột vào phần tử
// button.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// mouseenter: nó sẽ chạy khi rê chuột vào phần tử và rê ra ngoài
// button.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });
// pageX, pageY, clientX, clientY
document.addEventListener("mousemove", function (e) {
  console.log(`pageY: ${e.pageY}`);
  console.log(`clientY: ${e.clientY}`);
});
