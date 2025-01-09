import { PROJECT_STATUSES } from "./statuses";

export default function createProject(
  title,
  dueDate,
  status = PROJECT_STATUSES.NOT_STARTED
) {
  return {
    title,
    dueDate,
    status,
    todos: [],

    addTodo(todo) {
      this.todos.push(todo);
    },

    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },

    changeStatus(newStatus) {
      this.status = newStatus;
    },
  };
}
