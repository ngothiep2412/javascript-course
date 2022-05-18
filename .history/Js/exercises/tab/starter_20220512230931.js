const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(e) {
  // Xóa hết tất cả class active ở các tab-item
  [...tabItems].forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
}
