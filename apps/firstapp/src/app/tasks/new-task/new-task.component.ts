import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();

  // injecting task Service
  // this will replace emitting data to parent
  private taskService = inject(TaskService);

  title: string = '';
  summary = '';
  dueDate = '';

  onCloseDialog() {
    this.closeDialog.emit();
  }

  onSubmit() {
    const newTask = {
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    };
    this.taskService.addUsersTask(newTask, this.userId);
    this.onCloseDialog();

    // this.addNewTask.emit(newTask);
  }
}
