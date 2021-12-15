import { userProjects } from "../applogic/LocalStorage/checklocalstorage";

function populateProjectList() {
    const projectList = document.getElementById('projectList');
    const projects = userProjects;

    projectList.innerHTML = "";

    projects.forEach(function(element) {
        const listItem = document.createElement('button');
        listItem.classList.add('projectListItem');
        listItem.textContent = element.name;
        listItem.setAttribute('id', `${element.name}`);
        projectList.appendChild(listItem);
    })
}

export default populateProjectList;