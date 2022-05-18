window.addEventListener("load", function () {
  // Variable declaration
  const form = document.querySelector(".todo-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const total = this.elements["todo"].value;
    console.log(total);
  });
});
