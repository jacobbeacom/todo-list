import { createNewProject } from "../Projects/createnewproject";

let userProjects = [];

function checkStorage () {
    if (localStorage.length == 0) {
        createNewProject('New Project');
       
    } else {
         return console.log(JSON.parse(window.localStorage.getItem('userProjects')))
    }
}

export {checkStorage, userProjects};

//checkstorage will be called elsewhere, so we do not need to define a place for the stored userProjects array to go in this module