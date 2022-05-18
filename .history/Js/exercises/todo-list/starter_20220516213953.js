window.addEventListener("load", function () {
  // Variable declaration
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  function createTodoItem(title) {
    const template = `<div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
    </div>`;
    totdoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const total = this.elements["todo"].value;
    // Main code
    createTodoItem(todoVal);
    this.elements["todo"].value = "";
  });
});
