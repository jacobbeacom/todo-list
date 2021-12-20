function deleteTask(task, project) {
  project.toDoList.splice(task, 1);
}

export default deleteTask;
