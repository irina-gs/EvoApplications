import { Component } from '@angular/core';
import { RoleService } from './services/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public roleService: RoleService) { }

  setAdminRole() {
    this.roleService.role = 'admin'
  }

  setUserRole() {
    this.roleService.role = 'user'
  }
}
