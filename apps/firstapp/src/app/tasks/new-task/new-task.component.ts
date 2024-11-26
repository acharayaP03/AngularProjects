import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<NewTask>();

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

    this.addNewTask.emit(newTask);
  }
}
