import { checkStorage } from '../applogic/LocalStorage/checklocalstorage';
import saveToStorage from '../applogic/LocalStorage/savetolocalstorage';

function getActiveProject() {
  let result = 0;
  const projects = document.getElementsByClassName('projectListItem');
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].classList.contains('active')) {
      result = i;
    }
  }
  return result;
}

// Need to figure out how to correctly get the current active project!!!!

function populateDisplay() {
  const activeProject = getActiveProject();
  const displayArea = document.getElementById('body');
  const userProjects = checkStorage();

  displayArea.innerHTML = '';

  const projectTitle = document.createElement('p');
  projectTitle.textContent = `${activeProject.name}`;
  projectTitle.classList.add('projectTitle');

  const projectTasksArea = document.createElement('div');
  projectTasksArea.classList.add('projectTasksArea');

  const tasks = userProjects[activeProject].toDoList;

  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i += 1) {
      const button = document.createElement('button');
      button.classList.add('task');
      button.textContent = tasks[i];
      projectTasksArea.appendChild(button);
    }
  }

  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('task');
  newTaskButton.setAttribute('id', 'newTaskButton');
  newTaskButton.addEventListener('click', () => {
    const project = userProjects[activeProject];
    project.addToDo('New Task');
    saveToStorage(project);
  });
  projectTasksArea.appendChild(newTaskButton);

  displayArea.appendChild(projectTitle);
  displayArea.appendChild(projectTasksArea);

  return displayArea;
}

export default populateDisplay;
