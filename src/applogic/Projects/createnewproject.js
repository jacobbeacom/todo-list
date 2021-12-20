import populateProjectList from '../../DOM/projectlist';
import saveToStorage from '../LocalStorage/savetolocalstorage';
import createNewTask from '../Tasks/createnewtask';

class Project {
  constructor(name, toDoList) {
    this.name = name;
    this.toDoList = toDoList;
  }

  changeName(newName) {
    this.name = newName;
  }

  addToDo(toDo) {
    const newToDo = createNewTask(toDo, '1/1/2022', false);
    this.toDoList.push(newToDo);
  }

  removeToDo(toDo) {
    const removedToDo = this.toDoList.indexOf(toDo);
    this.toDoList.splice(removedToDo, 1);
  }
}

function makeProjectForm() {
  const newProjectForm = document.createElement('div');
  newProjectForm.classList.add('newProjectForm');
  newProjectForm.setAttribute('id', 'newProjectForm');

  const newProjectName = document.createElement('input');
  newProjectName.classList.add('newProjectName');

  const newProjectButtons = document.createElement('div');
  newProjectButtons.classList.add('newProjectButtons');

  const newProjectSubmit = document.createElement('button');
  newProjectSubmit.classList.add('newProjectSubmit');
  newProjectSubmit.textContent = 'Submit';
  newProjectSubmit.addEventListener('click', () => {
    createNewProject(newProjectName.value, []);
    closeProjectForm();
    populateProjectList();
  });

  const newProjectCancel = document.createElement('button');
  newProjectCancel.classList.add('newProjectCancel');
  newProjectCancel.textContent = 'Cancel';
  newProjectCancel.addEventListener('click', () => {
    closeProjectForm();
  });

  newProjectButtons.appendChild(newProjectSubmit);
  newProjectButtons.appendChild(newProjectCancel);

  newProjectForm.appendChild(newProjectName);
  newProjectForm.appendChild(newProjectButtons);

  return newProjectForm;
}

function closeProjectForm() {
  const nav = document.getElementById('sidebar');
  const form = document.getElementById('newProjectForm');
  nav.removeChild(form);
}

function createNewProject(name, toDoList) {
  const project = new Project(name, toDoList);
  saveToStorage(project);
  return project;
}

export { makeProjectForm, createNewProject };
