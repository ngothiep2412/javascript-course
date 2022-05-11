// 1. parentNode, parentElement, removeChild
// parentNodoe vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode); // phần tử cha gần nhất
console.log(span.parentElement); //
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove(); // không hỗ trợ tốt trong trình duyệt
// 2. nextElementSibling vs previousElementSibling
console.log(span.nextElementSibling);
console.log(span.previousElementSibling); // không tìm thấy thì trả về null
// 3. childNode vs children
