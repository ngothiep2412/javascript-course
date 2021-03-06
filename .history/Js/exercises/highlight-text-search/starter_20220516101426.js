window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const item = this.document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handleHighlight);
  // input lấy giá trị value mỗi khi chúng ta gõ
  function handleHighlight(e) {
    let filter = e.target.value;
    filter = filter.toLowerCase();
    [...item].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      console.log(index);
      if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)} `;
      }
    });
  }
});
