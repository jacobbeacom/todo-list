import { checkStorage } from "../applogic/LocalStorage/checklocalstorage";

function populateProjectList() {
    const projectList = document.getElementById('projectList');
    let list = checkStorage();

    projectList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const listItem = document.createElement('button');
        listItem.classList.add('projectListItem');
        listItem.textContent = `${list[i].name}`;
        listItem.setAttribute('id', `${list[i].name}`);
        projectList.appendChild(listItem);
    }
}

export default populateProjectList;
