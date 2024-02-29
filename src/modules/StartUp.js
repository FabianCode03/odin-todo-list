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
    const newTodoModal = document.querySelector(".new-todo-modal");
    const editTodoModal = document.querySelector(".edit-todo-modal");
    const closeModalBtn = document.querySelector(".cancel-btn");
    const submitBtn = document.querySelector(".submit-btn");
    const confirmChangesBtn = document.querySelector(".confirm-changes-btn");
    const newTodoForm = document.querySelector(".new-todo-form");
    const editTodoForm = document.querySelector(".edit-todo-form");
    const todoContainer = document.querySelector("#TodoContainer");

    // Adding event listeners to the DOM elements
    addTodoBtn.addEventListener("click", () => newTodoModal.showModal());
    closeModalBtn.addEventListener("click", () => newTodoModal.close());
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

      // Adding the Todo to the list
      Todo.addTodoToList(newTodo);

      // Resetting form and closing modal
      newTodoForm.reset();
      newTodoModal.close();

      // Rendering the updated todo-list
      renderTodoList(Todo.todoList, todoContainer);

      console.log(newTodo);
      console.log(Todo.todoList);
    });

    // Handling the buttons on the todo's via event bubbling
    todoContainer.addEventListener("click", event => {
      // Getting the nearest todo when container is clicked
      const todoElement = event.target.closest(".todo");
      const todoId = todoElement.dataset.id;
      const todo = Todo.todoList.find(todo => todo.id == todoId);

      if (event.target.closest(".deleteTodo") !== null) {
        Todo.removeTodoFromList(todo);
        renderTodoList(Todo.todoList, todoContainer);
      }

      if (event.target.closest(".editTodo") !== null) {
        editTodoForm.title.value = todo.title;
        editTodoForm.description.value = todo.description;
        editTodoForm.dueDate.value = todo.dueDate;
        editTodoForm.priority.value = todo.priority;
        todo.editing = true; // setting editing flag
        editTodoModal.showModal();
      }
    });

    confirmChangesBtn.addEventListener("click", e => {
      e.preventDefault();
      console.log("editing form");

      const todo = Todo.todoList.find(todo => todo.editing == true);
      console.log(todo);

      if (todo) {
        todo.title = editTodoForm.title.value;
        todo.description = editTodoForm.description.value;
        todo.dueDate = editTodoForm.dueDate.value;
        todo.priority = editTodoForm.priority.value;

        delete todo.editing;

        renderTodoList(Todo.todoList, todoContainer);
      }

      editTodoForm.reset();
      editTodoModal.close();
    });
  });
}
