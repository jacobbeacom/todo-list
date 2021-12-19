import {createNewProject} from '../Projects/createnewproject';
import createNewTask from '../Tasks/createnewtask';

function checkStorage() {
  const projects = [];
  const classedProjects = [];
  const toDoList = [];
  const classedToDoList = [];

  if (localStorage.length === 0) {
    const defaultProject = createNewProject('New Project', toDoList);
    classedProjects.push(defaultProject);
  } else if (localStorage.length > 0) {
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      projects.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    for (let p = 0; p < projects.length; p += 1) {
      for (let s = 0; s < projects[p].toDoList.length; s += 1) {
        const task = projects[p].toDoList[s];
        const classedTask = createNewTask(task.name, task.dueDate, task.completed);
        classedToDoList.push(classedTask);
      }
      const classedProject = createNewProject(projects[p].name, classedToDoList);
      classedProjects.push(classedProject);
    }
  }

  return classedProjects;
}

export default checkStorage;

// checkstorage will be called else+where, so we do not need to define a place for the stored userProjects array to go in this module
