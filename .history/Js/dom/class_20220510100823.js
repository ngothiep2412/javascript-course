// 1. selector.classList.add("abc")
const container = document.querySelector(".container");
// container.classList.add("is-active"); // ko được để khoảng trắng
// 2. selector.classList.remove("abc")
// container.classList.remove("is-active");
// 3. selector.classList.contains("container")
// console.log(container.classList.contains("container")); // true
// console.log(container.classList.contains("is-active")); // false
// 4. selector.classList.toggle("is-active")
// if (container.classList.contains("is-active")) {
//   container.classList.remove("is-active");
// } else {
//   container.classList.add("is-active");
// }
// hoặc cách ghi khác
// container.classList.toggle("is-active");
// 5. selector.classname --> trả ra chuỗi các class của selector
// const title = document.querySelector(".title");
// console.log(title.className);
// title.className = "title";
// menu toggle class
const menu = document.querySelector(".menu");
menu.classList.add("is-show");
const className = document.getElementsByClassName("menu-item");
console.log(className);
