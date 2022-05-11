// thêm xóa sửa node trong javascript
// 1. Tạo ra Element trong js: document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body --> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem";
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");
// Bài tập tạo ra HTML như đã minh họa ở file HTML
const div = document.createElement("div");
div.setAttribute("card");
