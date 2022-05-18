window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");

    const checkItem = e.target.parentNode.querySelectorAll(".check-item");
    if (!value) {
      [...checkItem].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }

    if (!/[A-Z]/.test(value)) {
      checkUpperClass.classList.add("unactive");
      checkUpperClass.classList.remove("active");
    } else {
      checkUpperClass.classList.add("active");
      checkUpperClass.classList.remove("unactive");
    }

    if (!/[A-Z]/.test(value)) {
      checkUpperClass.classList.add("unactive");
      checkUpperClass.classList.remove("active");
    } else {
      checkUpperClass.classList.add("active");
      checkUpperClass.classList.remove("unactive");
    }
  });
});
