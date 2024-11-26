import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();

  title: string = '';
  summary = '';
  dueDate = '';

  onCloseDialog() {
    this.closeDialog.emit();
  }
}
