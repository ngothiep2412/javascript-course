// 1. parentNode, parentElement, removeChild
// parentNodoe vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode); // phần tử cha gần nhất
console.log(span.parentElement); //
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove(); // không hỗ trợ tốt trong trình duyệt
// 2. nextElementSibling: tìm tới phần tử kế tiếp
// vs previousElementSibling: tìm tới phần tử đứng sau
console.log(span.nextElementSibling);
console.log(span.previousElementSibling); // không tìm thấy thì trả về null
// 3. childNode: trả về hết các node bên trong bao gồm textNodes vs children: trả về các node
// không bao gồm textNodes
console.log(span.childNodes);
console.log(span.children);
// 4. firstChild: lấy phần tử con đầu tiên bao gồm textNode vs firstElementChild
