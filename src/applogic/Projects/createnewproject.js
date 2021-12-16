import populateProjectList from "../../DOM/projectlist";
import saveToStorage from "../LocalStorage/savetolocalstorage";



class Project {
    constructor(name) {
        this.name = name;
    }
    changeName(newName) {
        this.name = newName;
    }
    
    toDoList = [];

    addToDo(toDo) {
        this.toDoList.push(toDo);
    }

    removeToDo(toDo) {
        const removedToDo = this.toDoList.indexOf(toDo);
        this.toDoList.splice(removedToDo, 1);

    }
}

function makeProjectForm () {
    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('newProjectForm');
    newProjectForm.setAttribute('id', 'newProjectForm');

    const newProjectName = document.createElement('input')
    newProjectName.classList.add('newProjectName');

    const newProjectButtons = document.createElement('div');
    newProjectButtons.classList.add('newProjectButtons');
    
    const newProjectSubmit = document.createElement('button');
    newProjectSubmit.classList.add('newProjectSubmit');
    newProjectSubmit.textContent = 'Submit';
    newProjectSubmit.addEventListener('click', () => {
        createNewProject(newProjectName.value);
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

function closeProjectForm () {
    const nav = document.getElementById('sidebar');
    const form = document.getElementById('newProjectForm');
    nav.removeChild(form);
}

function createNewProject(name) {
    const project = new Project(name);
    //Still needs to spit out the new project to the project overview display area
    saveToStorage(project);
    return project;
}

export {makeProjectForm, createNewProject}