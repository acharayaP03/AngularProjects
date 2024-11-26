import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { USERS } from './users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firstapp';
  userName: string = '';
  selectedId?: string;
  users = USERS;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedId);
  }

  onSelectedUser(id: string) {
    this.selectedId = id;
  }
}
