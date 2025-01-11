export const display = (() => {
  const renderProjects = (projects, container) => {
    container.innerHTML = "";

    projects.forEach((project) => {
      const projectTitle = document.createElement("h3");

      projectTitle.textContent = `${project.title}`;
      container.appendChild(projectTitle);
    });
  };

  const renderTodos = (project, container) => {
    container.innerHTML = "";

    project.todos.forEach((todo) => {
      const todoElement = document.createElement("div");

      todoElement.textContent = `${todo.title}`;
      container.appendChild(todoElement);
    });
  };

  const renderApp = (appState, projectContainer, todoContainer) => {
    const { projects, currentProject } = appState;

    renderProjects(projects, projectContainer);
    renderTodos(currentProject, todoContainer);
  };

  return { renderApp };
})();
