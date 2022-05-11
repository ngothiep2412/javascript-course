// 1. parentNode, parentElement, removeChild
// parentNodoe vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode); // phần tử cha gần nhất
console.log(span.parentElement); //
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
span.parentNode.removeChild(span);
