import { NewTask, Task } from './task/task.model';
import { tasks as assignedTasks } from '../Data/appData';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
});
export class TaskService {
  private tasks = assignedTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addUsersTask(newTask: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId,
      ...newTask,
    });

    this.saveData();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveData();
  }

  private saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
