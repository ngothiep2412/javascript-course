window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function () {
    const input = this.previousElementSibling;
    const inputType = input.getAttribute("type");
    if (inputType === "password") {
      inputType.setAttribute("type", "password");
    } else {
      inputType.setAttribute("type", "password");
    }
  });
});
