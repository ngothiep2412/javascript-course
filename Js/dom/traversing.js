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
// 3. childNode: trả về 1 mảng các node bên trong bao gồm textNodes vs children: trả về các node
// không bao gồm textNodes
console.log(span.childNodes); // text <strong> text
console.log(span.children);
// 4. firstChild: lấy phần tử con đầu tiên bao gồm textNode
//   vs firstElementChild
console.log(span.firstChild); // text
console.log(span.firstElementChild); //strong
// 5. lastChild vs lastElementChild
console.log(span.lastChild); // text
console.log(span.lastElementChild); //strong thứ 2
// 6. nextSibling vs previousSebiling
console.log(span.nextSibling);
console.log(span.previousSibling);
