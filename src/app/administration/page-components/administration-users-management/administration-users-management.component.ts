import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserSimple } from 'src/app/interfaces/user-simple';
import { DataService } from 'src/app/services/data/data.service';
import { ModalWindowService } from 'src/app/services/modal-window/modal-window.service';

@Component({
  selector: 'app-administration-users-management',
  templateUrl: './administration-users-management.component.html',
  styleUrls: ['./administration-users-management.component.css']
})
export class AdministrationUsersManagementComponent implements OnInit {
  userList: UserSimple[] = []

  constructor(
    private title: Title,
    private dataService: DataService,
    private modalWindowService: ModalWindowService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Управление пользователями')

    this.dataService.getUsers().subscribe({
      next: (response) => {
        this.userList = response
      }
    })
  }

  onDelete(id: string) {
    const user = this.userList.find(user => user.id === id)

    this.modalWindowService.openModalWindow(
      'Удалить этого пользователя?',
      `Вы хотите удалить ${user?.firstName} ${user?.lastName}. Действие нельзя отменить`,
      'Удалить',
      'Закрыть',
      true,
      () => this.deleteUser(id)
    )
  }

  private deleteUser(id: string) {
    this.dataService.deleteUser(id).subscribe({
      next: () => {
        this.userList = this.userList.filter(user => user.id !== id)
      }
    })
  }
}
