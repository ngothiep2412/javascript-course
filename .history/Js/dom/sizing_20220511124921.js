// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsettop
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của width 200
log(boxed.offsetHeight); // độ rộng của height  200
log(boxed.offsetLeft); // vị trí của nó so với phần bên trái 0
log(boxed.offsetTop); // vị trí của nó so với phía trên 0
log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha

// 2. clientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth); // độ rộng của phần tử - border 190
log(boxed.clientHeight); // độ dài của phần tử - border 190
log(boxed.clientLeft); // vị trí bên trái của nó so với bên trái border 5
log(boxed.clientTop); // vị trí phía trên của nó so với bên trái border 5

// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeigh
log(window.innerHeight); //
log(window.outerHeightHeight); //
