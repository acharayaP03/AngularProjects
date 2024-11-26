import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { tasks as assignedUserTasks } from '../Data/appData';
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  providers: [TaskService],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;

  assignNewTask = false;

  // Dependency injection
  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onAssignNewTask() {
    this.assignNewTask = true;
  }

  onAddNewTask(newTask: NewTask) {
    this.taskService.addUsersTask(newTask, this.userId);

    this.assignNewTask = false;
  }

  closeAssignNewTaskDialog() {
    this.assignNewTask = false;
  }
}
