import Task from './task';

export default toggleCompleted = (index) => {
    const task = Task.tasksArray[index - 1];
    task.completed = !task.completed;
    Task.updateLocalStorage();
    Task.displayAllTasks();
  }