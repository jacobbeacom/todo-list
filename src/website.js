// This module creates the content structure for which this application will use
import { checkStorage } from "./applogic/LocalStorage/checklocalstorage";
import {makeProjectForm} from "./applogic/Projects/createnewproject";
import populateProjectList from "./DOM/projectlist";


function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const appTitle = document.createElement('h1');
    appTitle.textContent = 'To.Do';
    appTitle.classList.add('appTitle');

    header.appendChild(appTitle);

    return header;
    
}

function createSideBar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.setAttribute('id', 'sidebar');

    const projectList = document.createElement('div');
    projectList.classList.add('projectList');
    projectList.setAttribute('id', 'projectList');

    const addProject = document.createElement('button');
    addProject.classList.add('addProject');
    addProject.textContent = 'Add Project'
    addProject.addEventListener('click', () => {
        sidebar.appendChild(makeProjectForm());
    });

    sidebar.appendChild(projectList);
    sidebar.appendChild(addProject);

    return sidebar;

}

function createBody() {
    const body = document.createElement('main');
    body.setAttribute('id', 'body');
    body.classList.add('main');

    return body;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('a');
    copyright.textContent = `©Jacob Beacom 2021`
    copyright.setAttribute('href', 'https://github.com/jacobbeacom');
    footer.appendChild(copyright);

    return footer;
}

function initializeSite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createSideBar());
    content.appendChild(createBody());
    content.appendChild(createFooter());
    checkStorage();
    populateProjectList();

   // checkLocalStorage(); will run inside of populateprojectlist function
}

export default initializeSite;