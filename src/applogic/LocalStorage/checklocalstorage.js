import { createNewProject } from '../Projects/createnewproject';
import createNewTask from '../Tasks/createnewtask';

function checkStorage() {
  const projects = [];
  const classedProjects = [];
  const toDoList = [];

  if (localStorage.length === 0) {
    const defaultProject = createNewProject('New Project', toDoList);
    defaultProject.addToDo('New Task');
    classedProjects.push(defaultProject);
  } else if (localStorage.length > 0) {
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      projects.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    for (let p = 0; p < projects.length; p += 1) {
      const classedTasks = [];
      if (projects[p].toDoList.length === 0) {
        const defaultTask = createNewTask('New Task', '1/1/2022', false);
        projects[p].toDoList.push(defaultTask);
        const classedProject = createNewProject(projects[p].name, projects[p].toDoList);
        classedProjects.push(classedProject);
      } else {
        for (let s = 0; s < projects[p].toDoList.length; s += 1) {
          const task = projects[p].toDoList[s];
          const classedTask = createNewTask(task.name, task.dueDate, task.completed);
          classedTasks.push(classedTask);
        }
        const classedProject = createNewProject(projects[p].name, classedTasks);
        classedProjects.push(classedProject);
      }
    }
  }
  return classedProjects;
}
export default checkStorage;
