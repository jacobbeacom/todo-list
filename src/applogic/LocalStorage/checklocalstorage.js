import { newProject } from "../Projects/createnewproject";

function checkStorage () {
    if (Storage.length == 0) {
       return newProject('New Project');
    } else {
        key = localStorage.key(0);
        return localStorage.getItem(key);
    }

}

export default checkStorage;