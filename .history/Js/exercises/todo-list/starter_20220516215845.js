window.addEventListener("load", function () {
  // Variable declaration
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todo =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
  console.log("todo", todo);
  if (Array.isArray(todo) && todo.length > 0) {
    [...todo].forEach((item) => createTodoItem(item));
  }
  function createTodoItem(title) {
    const template = `<div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
    </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;
    // Main code
    createTodoItem(todoVal);
    todo.push(todoVal);
    localStorage && localStorage.setItem("todoList", JSON.stringify(todo));
    // save to localStorage
    this.elements["todo"].value = "";
  });

  // Handle remove todo
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      // remove todo in DOM
      const todoDiv = e.target.parentNode;
      todoDiv.parentNode.removeChild(todoDiv);
      // remove todo in localStorage
      const todoText = e.target.previousElementSibling;
      console.log(todoText);
    }
  });
});
