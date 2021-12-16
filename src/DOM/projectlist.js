import { userProjects } from "../applogic/LocalStorage/checklocalstorage";
import { checkStorage } from "../applogic/LocalStorage/checklocalstorage";

function populateProjectList() {
    const projectList = document.getElementById('projectList');
    const projects = checkStorage();

    projectList.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
        const listItem = document.createElement('button');
        listItem.classList.add('projectListItem');
        listItem.textContent = `${projects[i].name}`;
        listItem.setAttribute('id', `${projects[i].name}`);
        projectList.appendChild(listItem);
    }
}

export default populateProjectList;