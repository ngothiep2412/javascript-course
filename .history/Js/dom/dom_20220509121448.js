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
// 2.2 document.querySelectorAll("selector")  --> trả về 1 node list
