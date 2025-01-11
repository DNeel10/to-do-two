import Project from "./project.js";
import Todo from "./todo.js";
import { format, startOfToday } from "date-fns";

export function initializeApp() {
  const date = format(startOfToday(), "MM/dd/yyyy");

  const projects = []; // initialize an empty array to manage multiple projects

  // create default projects and todos to start with
  const defaultProject = Project("Your Project", `${date}`);
  const defaultTodo = Todo(
    "Feed the Dog",
    "Make sure to feed the dog 1 cup of food in the morning",
    `${date}`
  );

  defaultProject.addTodo(defaultTodo);

  projects.push(defaultProject);

  // return the initialized app state
  return { projects, currentProject: defaultProject };
}
