// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsettop
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của width
log(boxed.offsetHeight); // độ rộng của height
log(boxed.offsetLeft); // vị trí của nó so với phần bên trái
log(boxed.offsetTop); // vị trí của nó so với phía trên
