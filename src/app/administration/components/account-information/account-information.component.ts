import { Component, Input } from '@angular/core';
import { Role } from 'src/app/enum/role.enum';
import { UserFull } from 'src/app/interfaces/user-full';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent {
  @Input() user: UserFull = {
    username: '',
    role: Role.Guest,
    firstName: '',
    lastName: '',
    middleName: '',
    avatar: '',
    userAgent: '',
    createdOn: '',
    updatedOn: '',
    lastEntry: '',
    isActive: false,
    posts: [],
    comments: [],
    id: ''
  }
}
