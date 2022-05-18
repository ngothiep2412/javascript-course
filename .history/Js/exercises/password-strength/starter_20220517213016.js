window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkItem = e.target.parentNode.querySelectorAll(".check-item");
    if (!value) return;
    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
  });
});
