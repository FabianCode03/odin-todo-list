export class Todo {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #isDone = false;
  static #idCounter = 1;
  static #todoCount = 0;
  static #todoList = [];

  constructor(title, description, dueDate, priority) {
    this.#id = Todo.#idCounter++;
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    Todo.#todoCount++;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get priority() {
    return this.#priority;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  get isDone() {
    return this.#isDone;
  }

  toggleIsDone() {
    this.#isDone = !this.#isDone;
  }

  static get todoCount() {
    return Todo.#todoCount;
  }

  static decrementTodoCount() {
    Todo.#todoCount--;
  }

  static get todoList() {
    return Todo.#todoList;
  }

  static addTodoToList(todo) {
    Todo.#todoList.push(todo);
  }

  static removeTodoFromList(todo) {
    let index = Todo.#todoList.indexOf(todo);
    if (index !== -1) {
      Todo.#todoList.splice(index, 1);
    }
  }
}
