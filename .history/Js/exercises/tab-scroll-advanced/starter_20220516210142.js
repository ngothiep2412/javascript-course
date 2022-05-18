window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab");
  const tabNext = document.querySelector(".tab-next");
  const tabPrev = document.querySelector(".tab-prev");
  const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
  let deltaScroll = 40;
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(e) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft;
    tabList.scroll(leftSpacing / 2, 0);
  }
});
