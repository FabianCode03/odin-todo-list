export class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #isDone = false;
  static #todoCount = 0;
  static #todoList = [];

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    Todo.#todoCount++;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    if (typeof title === "string" && title.length > 0) {
      this.#title = title;
    } else {
      console.error("title must be a non-empty string!");
    }
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
    let currentDate = new Date();
    if (currentDate >= dueDate) {
      this.#dueDate = dueDate;
    } else {
      console.error("due Date can't be in the past!");
    }
  }

  get priority() {
    return this.#priority;
  }

  set priority(priority) {
    if (typeof priority === "number" && priority > 0 && priority < 4) {
      this.#priority = priority;
    } else {
      console.error("priority must be 1, 2 or 3 and typeof number!");
    }
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
}
