import { createNewProject } from "../Projects/createnewproject";


function checkStorage () {
    let projects = [];
    if (localStorage.length === 0) {
        const defaultProject = createNewProject('New Project');
        projects.push(defaultProject);
        
    }   else if (localStorage.length > 0) {
        
        const keys = Object.keys(localStorage);
        let i = keys.length;
        while (i--) {
            //localStorage.getItem(keys[i])
            projects.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        
        }
    return projects;
}

export {checkStorage};

//checkstorage will be called elsewhere, so we do not need to define a place for the stored userProjects array to go in this module
