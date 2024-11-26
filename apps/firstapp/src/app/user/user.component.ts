import { User } from './user.model';
import {
  Component,
  computed,
  Input,
  signal,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
})
export class UserComponent {
  // selectedUser = signal(USERS[randomeIndex]);

  // imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return '/assets/users/' + this.selectedUser.avatar;
  // }

  // onSelected() {
  //   const randomeIndex = Math.floor(Math.random() * USERS.length);
  //   this.selectedUser.set(USERS[randomeIndex]);
  // }

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selectedUser!: boolean;
  @Output() select = new EventEmitter<string>();

  // using output signal and can be replaced new EventEmitter() by below
  // select = output<string | number>();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }
  onSelected() {
    this.select.emit(this.user.id);
  }
}
