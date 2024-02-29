import { Todo } from "./Todo";
import { renderTodoList } from "./RenderTodoList.js";

export function addAllEventListeners() {
  window.addEventListener("load", function () {
    // Storing references to the DOM elements
    const addTodoBtn = document.querySelector(".new-Todo-btn");
    const allTodosView = document.querySelector(".all-todos-view");
    const todayView = document.querySelector(".today-view");
    const thisWeekView = document.querySelector(".this-week-view");
    const projectsView = document.querySelector(".projects-view");
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelector(".cancel-btn");
    const submitBtn = document.querySelector(".submit-btn");
    const newTodoForm = document.querySelector(".new-todo-form");
    const todoContainer = this.document.querySelector("#TodoContainer");

    // Adding event listeners to the DOM elements
    addTodoBtn.addEventListener("click", () => modal.showModal());
    closeModalBtn.addEventListener("click", () => modal.close());
    allTodosView.addEventListener("click", () =>
      console.log("showing all todos")
    );
    todayView.addEventListener("click", () =>
      console.log("showing today's todos")
    );
    thisWeekView.addEventListener("click", () =>
      console.log("showing this week's todos")
    );
    projectsView.addEventListener("click", () =>
      console.log("showing projects")
    );
    submitBtn.addEventListener("click", e => {
      e.preventDefault();
      console.log("submitting form");

      // Creation new Todo-Instance
      const newTodo = new Todo(
        newTodoForm.title.value,
        newTodoForm.description.value,
        newTodoForm.dueDate.value,
        newTodoForm.priority.value
      );

      Todo.addTodoToList(newTodo);
      newTodoForm.reset();
      modal.close();
      renderTodoList(Todo.todoList, todoContainer);
      console.log(newTodo);
      console.log(Todo.todoList);
    });
  });
}
