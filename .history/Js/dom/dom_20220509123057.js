// 1. DOM là gì ?
// Document Object Model
// DOM attribute
// DOM node
// 2. Selecting nodes
// 2.1 document.querySelector("selector")  --> trả về 1 node nếu tồn tại
// selector đó ngược lại nó sẽ trả về null
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector("#spinner2");

console.log(singleNode);
console.log(singleNode2);
console.log(singleNode3);
console.log(singleNode4);
// 2.2 document.querySelectorAll("selector")  --> trả về 1 NodeList
// chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng forEach
// nó giống như loop nhưng không sử dụng được các phương thức như push, pop, shift,..
// const multiNode = document.querySelectorAll(".item");
// for (let i = 0; i < multiNode.length; i++) {
//   console.log(multiNode[i]);
// }
// console.log(multiNode);
// 2.3 document.getElementsByClassName("class") --> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về
// empty
const classNode = document.getElementsByClassName("item");
console.log(classNode);
// 2.4 document.getElementsByTagName("tagName")
const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);
