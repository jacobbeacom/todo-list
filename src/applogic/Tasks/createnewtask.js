class Task {
  constructor(name, dueDate, completed = false) {
    this.name = name;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  setName(name) {
    this.name = name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  setCompletedStatus(completed) {
    this.completed = completed;
  }

  getName() {
    return this.name;
  }

  getDate() {
    return this.dueDate;
  }

  getCompletedStatus() {
    return this.completed;
  }
}

function createNewTask(name, dueDate, completed) {
  const newTask = new Task(name, dueDate, completed);
  return newTask;
}

export default createNewTask;
