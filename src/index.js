import createTodo from "./todo.js";
import createProject from "./project.js";

const todo = createTodo("test", "testing", "1-8-2025", "high");
const project = createProject("testProj", "1-9-2025");

console.log(todo);
console.log(project);

project.addTodo(todo);

window.createTodo = createTodo;
window.createProject = createProject;

window.todo = todo;
window.project = project;
