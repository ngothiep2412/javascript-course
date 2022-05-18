window.addEventListener("load", function () {
  // Variable declaration
  const form = document.querySelector(".todo-form");
  function createTodoItem(title) {
    const template = `<div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
    </div>`;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const total = this.elements["todo"].value;
    // Main code

    this.elements["todo"].value = "";
  });
});
