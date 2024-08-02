import { Component } from '@angular/core';
import { Users } from 'src/app/models/Users.model';
import { mockUsers } from 'src/app/mocks/Users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users: Users[] = mockUsers;
  
}
