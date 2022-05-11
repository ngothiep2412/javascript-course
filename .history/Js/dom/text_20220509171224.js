// 1. textContext --> Lấy ra nội dung(only text) bao gồm text trong html
// tag(nếu có) của selector
const spinner = document.querySelector("#spinner");
// Thay đổi text content
// spinner.textContent = "Hello my content";
// console.log(spinner.textContent);
// 2. innerText
console.log(spinner.textContent);
console.log(spinner.innerText);

// 3.innerHTML --> Lấy ra nội dung của selector bao gồm cả HTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello html</div>`;
// parse
