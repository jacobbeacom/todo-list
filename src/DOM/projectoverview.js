import { checkStorage } from "../applogic/LocalStorage/checklocalstorage";

function getActiveProject() {
    const projects = document.getElementsByClassName('projectListItem');
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].classList.contains('active')) {
                return i
            } else {
                return 0
            }
        }
}

//Need to figure out how to correctly get the current active project!!!!

function populateDisplay() {
    const activeProject = getActiveProject();
    const displayArea = document.getElementById('body');
    const userProjects = checkStorage();

    displayArea.innerHTML = "";

    const projectTitle = document.createElement('p');
    projectTitle.textContent = `${activeProject.name}`;
    projectTitle.classList.add('projectTitle');

    const projectTasksArea = document.createElement('div');
    projectTasksArea.classList.add('projectTasksArea');

    const tasks = userProjects[activeProject].toDoList;
    
    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            let button = document.createElement('button');
            button.classList.add('task');
            button.textContent = tasks[i];
            projectTasksArea.appendChild(button);
        }
    }   else {
        }

    const newTaskButton = document.createElement('button');
    newTaskButton.classList.add('task');
    newTaskButton.setAttribute('id', 'newTaskButton');
    //newTaskButton.addEventListener('click', )
    projectTasksArea.appendChild(newTaskButton);

    displayArea.appendChild(projectTitle);
    displayArea.appendChild(projectTasksArea);

    return displayArea;
}

export default populateDisplay;