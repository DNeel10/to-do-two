import { initializeApp } from "./appController";
import { display } from "./display";

const sidebar = document.getElementById("sidebar");
const projectDiv = document.getElementById("projectDiv");

const app = initializeApp();

display.renderApp(app, sidebar, projectDiv);
