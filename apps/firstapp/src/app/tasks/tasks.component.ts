import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { tasks as assignedUserTasks } from '../Data/appData';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  standalone: true,
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;

  assignNewTask = false;

  tasks = assignedUserTasks;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }

  inCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAssignNewTask() {
    this.assignNewTask = true;
  }

  onAddNewTask(newTask: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      ...newTask,
    });

    this.assignNewTask = false;
  }

  closeAssignNewTaskDialog() {
    this.assignNewTask = false;
  }
}
