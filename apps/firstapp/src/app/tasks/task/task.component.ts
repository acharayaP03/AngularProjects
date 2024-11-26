import { TaskService } from './../tasks.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from '../../sharedUi/card/card.component';
import { ButtonComponent } from '../../sharedUi/button/button.component';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe, ButtonComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
