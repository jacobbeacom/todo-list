import { newProject } from "../Projects/createnewproject";

let userProjects = [];

function checkStorage () {
    if (Storage.length == 0) {
       let defaultProject = newProject('New Project');
       userProjects.push(defaultProject);

    } else {
         return JSON.parse(window.localStorage.getItem('userProjects'))
    }
}

export default checkStorage;

//checkstorage will be called elsewhere, so we do not need to define a place for the stored userProjects array to go in this module