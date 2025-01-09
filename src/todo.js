export default function createTodo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted: false,

    toggleCompleted() {
      this.isCompleted = !this.isCompleted;
    },
  };
}
