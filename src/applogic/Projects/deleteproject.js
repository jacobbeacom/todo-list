function deleteProject(project, userProjects) {
  userProjects.splice(project, 1);
  localStorage.removeItem(project.name);
}

export default deleteProject;
