const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(e) {
  // Xóa hết tất cả class active ở các tab-item
  [...tabItems].forEach((item) => item.classList.remove("active"));
  // Sau đó add class active vào tab hiện tại
  e.target.classList.add("active");
  const tabNumber = parseInt(e.target.dataset.tab);
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    console.log(item.getAttribute("data-tab"));
  });

  //   [...tabContents][tabNumber - 1].classList.add("active");
}
