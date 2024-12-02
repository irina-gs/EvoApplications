import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Role } from 'src/app/enum/role.enum';
import { ModalWindowService } from 'src/app/services/modal-window/modal-window.service';
import { ResetUser } from 'src/app/state/model/user.model';
import { UserState } from 'src/app/state/user.state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  firstName: string = ''
  lastName: string = ''
  role: Role = Role.Guest
  avatar: string = ''
  username: string = ''

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select(UserState.getFirstName).subscribe({
      next: (value) => {
        this.firstName = value ?? ''
      }
    })

    this.store.select(UserState.getLastName).subscribe({
      next: (value) => {
        this.lastName = value ?? ''
      }
    })

    this.store.select(UserState.getRole).subscribe({
      next: (value) => {
        this.role = value
      }
    })

    this.store.select(UserState.getAvatar).subscribe({
      next: (value) => {
        this.avatar = value ?? ''
      }
    })

    this.store.select(UserState.getUsername).subscribe({
      next: (value) => {
        this.username = value ?? ''
      }
    })
  }

  exit() {
    this.store.dispatch(new ResetUser())
    this.router.navigateByUrl('/')
  }
}
