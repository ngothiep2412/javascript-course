// 1. selector.classList.add("abc")
const container = document.querySelector(".container");
container.classList.add("is-active");
// 2. selector.classList.remove("abc")
container.classList.remove("is-active");
// 3. selector.classList.contains("container")
console.log(container.classList.contains("container")); // true
console.log(container.classList.contains("is-active")); // false
