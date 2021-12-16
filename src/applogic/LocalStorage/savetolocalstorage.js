import populateProjectList from "../../DOM/projectlist";


function saveToStorage (project) {
    const projectName = String(project.name);
    localStorage.setItem(projectName, JSON.stringify(project));
    populateProjectList();
}

export default saveToStorage;