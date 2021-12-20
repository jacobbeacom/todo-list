import checkStorage from '../applogic/LocalStorage/checklocalstorage';
import saveToStorage from '../applogic/LocalStorage/savetolocalstorage';
import deleteTask from '../applogic/Tasks/deletetask';

function getActiveProject() {
  let result = 0;
  const projects = document.getElementsByClassName('projectListItem');
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].classList.contains('active')) {
      result = i;
    } else {
      result = 0;
    }
  }
  return result;
}

function populateDisplay() {
  const activeProject = getActiveProject();
  const displayArea = document.getElementById('body');
  const userProjects = checkStorage();

  displayArea.innerHTML = '';

  const projectTitle = document.createElement('p');
  projectTitle.textContent = `${userProjects[activeProject].name}`;
  projectTitle.classList.add('projectTitle');

  const projectTasksArea = document.createElement('div');
  projectTasksArea.classList.add('projectTasksArea');

  const tasks = userProjects[activeProject].toDoList;

  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i += 1) {
      const task = document.createElement('div');
      task.classList.add('task');

      const taskTitle = document.createElement('p');
      taskTitle.textContent = tasks[i].getName();

      const taskDate = document.createElement('p');
      taskDate.textContent = tasks[i].getDate();

      const completedDiv = document.createElement('div');
      const taskCompleted = document.createElement('input');
      taskCompleted.setAttribute('type', 'checkbox');
      taskCompleted.setAttribute('id', `${taskTitle.textContent} Completed`);
      const taskCompletedLabel = document.createElement('label');
      taskCompletedLabel.setAttribute('for', `${taskTitle.textContent} Completed`);
      taskCompletedLabel.textContent = 'Completed';

      completedDiv.appendChild(taskCompleted);
      completedDiv.appendChild(taskCompletedLabel);

      const deleteTaskButton = document.createElement('button');
      deleteTaskButton.textContent = 'X';
      deleteTaskButton.addEventListener('click', () => {
        deleteTask(i, userProjects[activeProject]);
        saveToStorage(userProjects[activeProject]);
        populateDisplay();
      });

      task.appendChild(taskTitle);
      task.appendChild(taskDate);
      task.appendChild(completedDiv);
      task.appendChild(deleteTaskButton);

      projectTasksArea.appendChild(task);
    }
  }

  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('task');
  newTaskButton.setAttribute('id', 'newTaskButton');
  newTaskButton.textContent = 'Add New Task';
  newTaskButton.addEventListener('click', () => {
    const project = userProjects[activeProject];
    project.addToDo('New Task');
    saveToStorage(project);
    populateDisplay();
  });
  projectTasksArea.appendChild(newTaskButton);

  displayArea.appendChild(projectTitle);
  displayArea.appendChild(projectTasksArea);

  return displayArea;
}

export default populateDisplay;
