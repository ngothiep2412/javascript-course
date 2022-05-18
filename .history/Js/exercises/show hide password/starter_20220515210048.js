window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function () {
    const input = this.previousElementSibling;
    console.log(input);
  });
});
