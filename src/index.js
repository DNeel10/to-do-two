import { initializeApp } from "./appController";
import { display } from "./display";
import "./styles.css";

const projectsDiv = document.getElementById("projects");
const todosDiv = document.getElementById("todos");

const app = initializeApp();

display.renderApp(app, projectsDiv, todosDiv);
