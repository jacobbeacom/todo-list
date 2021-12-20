import checkStorage from '../applogic/LocalStorage/checklocalstorage';
import deleteProject from '../applogic/Projects/deleteproject';
import populateDisplay from './projectoverview';

function populateProjectList() {
  const projectList = document.getElementById('projectList');
  const list = checkStorage();

  projectList.innerHTML = '';

  for (let i = 0; i < list.length; i += 1) {
    const listItem = document.createElement('div');
    listItem.classList.add('projectListItem');
    listItem.textContent = `${list[i].name}`;
    listItem.setAttribute('id', `${list[i].name}`);
    listItem.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
        // do nothing
      } else {
        const buttons = document.getElementsByClassName('projectListItem');
        for (let p = 0; p < buttons.length; p += 1) {
          buttons[p].classList.remove('active');
        }
        e.target.classList.add('active');
      }
    });

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = 'X';
    deleteProjectButton.classList.add('deleteProjectButton');
    deleteProjectButton.addEventListener('click', () => {
      deleteProject(list[i], list);
      populateProjectList();
      populateDisplay();
    });
    listItem.appendChild(deleteProjectButton);

    projectList.appendChild(listItem);
  }
}

export default populateProjectList;
