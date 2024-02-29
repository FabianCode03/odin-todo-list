export function renderTodoList(todoList, container) {
  container.innerHTML = ""; //clearing container to avoid duplication
  todoList.forEach(todo => {
    container.innerHTML += `
<div class="todo priority-${todo.priority}">
    <div class="leftElements">
        <input type="checkbox" name="isDone" id="isDone" />
        <h3 class="todo-title">${todo.title}</h3>
    </div>
    <div class="rightElements">
        <button class="showDetails">Details</button>
        <span class="dueDate">${todo.dueDate}</span>
        <button class="editTodo">
            <span class="material-symbols-outlined"> edit </span>
        </button>
        <button class="deleteTodo">
            <span class="material-symbols-outlined"> delete </span>
        </button>
    </div>
</div>`;
  });
}
