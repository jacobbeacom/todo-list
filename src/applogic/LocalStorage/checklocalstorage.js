import { createNewProject } from "../Projects/createnewproject";


function checkStorage () {
    let projects = [];
    let classedProjects = [];
    const toDoList = [];
    if (localStorage.length === 0) {
        const defaultProject = createNewProject('New Project', toDoList);
        classedProjects.push(defaultProject);
        
    }   else if (localStorage.length > 0) {
        
        const keys = Object.keys(localStorage);
        let i = keys.length;
        while (i--) {
            //localStorage.getItem(keys[i])
            projects.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        for (let i = 0; i < projects.length; i++) {
            console.log(projects[i])
            const classedProject = createNewProject(projects[i].name, projects[i].toDoList);
            classedProjects.push(classedProject);
            //console.log(classedProject);
        }
        }
        return classedProjects;
}

export {checkStorage};

//checkstorage will be called elsewhere, so we do not need to define a place for the stored userProjects array to go in this module
