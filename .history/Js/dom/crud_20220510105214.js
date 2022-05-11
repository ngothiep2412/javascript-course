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
const card = document.createElement("div");
card.setAttribute("class", "card");
body.appendChild(card);
const cardImage = document.createElement("img");

// cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-img");
card.appendChild(cardImage);
// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Thiệp");
const h1 = document.createElement("h1");
body.appendChild(h1);
