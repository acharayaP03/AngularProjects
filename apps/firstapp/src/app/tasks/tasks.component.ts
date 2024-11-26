import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';
import { ButtonComponent } from '../sharedUi/button/button.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent, ButtonComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  providers: [TaskService],
  encapsulation: ViewEncapsulation.None,
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
