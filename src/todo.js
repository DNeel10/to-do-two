import { TODO_STATUSES } from "./statuses.js";

export default function createTodo(
  title,
  description,
  dueDate,
  status = TODO_STATUSES.INCOMPLETE
) {
  return {
    title,
    description,
    dueDate,
    status,

    changeStatus(newStatus) {
      this.status = newStatus;
    },
  };
}
