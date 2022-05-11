// 1. selector.getAttribute("attribute") --> lấy ra giá trị của attribute selector
// selector: 1 cái
// attribute --> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");

// li.forEach((item) => {
//   console.log(item.getAttribute("class"));
// });
for (let n of li) {
  console.log(n.getAttribute("class"));
}
console.log(li);
