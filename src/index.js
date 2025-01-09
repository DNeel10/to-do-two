import createTodo from "./todo.js";

console.log("testing");

const todo = createTodo("test", "testing", "1-8-2025", "high");

console.log(todo);

window.todo = todo;
