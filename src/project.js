export default function createProject(title, dueDate) {
  return {
    title,
    dueDate,
    todos: [],

    addTodo(todo) {
      this.todos.push(todo);
    },

    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
  };
}
