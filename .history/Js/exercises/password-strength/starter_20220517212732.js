window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLength = e.target.parentNode.querySelector(".check-length");
    console.log(checkLength);
    if (value.length < 8) {
    }
  });
});
