import { NewTask, Task } from './task/task.model';
import { tasks as assignedTasks } from '../Data/appData';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
});
export class TaskService {
  private tasks = assignedTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addUsersTask(newTask: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId,
      ...newTask,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
