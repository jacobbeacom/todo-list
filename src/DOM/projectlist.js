import checkStorage from '../applogic/LocalStorage/checklocalstorage';

function populateProjectList() {
  const projectList = document.getElementById('projectList');
  const list = checkStorage();

  projectList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement('button');
    listItem.classList.add('projectListItem');
    listItem.textContent = `${list[i].name}`;
    listItem.setAttribute('id', `${list[i].name}`);
    listItem.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
      } else {
        const buttons = document.getElementsByClassName('projectListItem');
        for (let p = 0; p < buttons.length; p++) {
          buttons[p].classList.remove('active');
        }
        e.target.classList.add('active');
      }
    });
    projectList.appendChild(listItem);
  }
}

export default populateProjectList;
