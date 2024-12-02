import { Component, Input } from '@angular/core';
import { Role } from 'src/app/enum/role.enum';
import { UserFull } from 'src/app/interfaces/user-full';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data/data.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ModalWindowService } from 'src/app/services/modal-window/modal-window.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent {
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

  constructor(
    private dataService: DataService,
    private notificationService: NotificationService,
    private location: Location,
    private modalWindowService: ModalWindowService
  ) { }

  onDelete(id: string) {
    this.modalWindowService.openModalWindow(
      'Удалить этого пользователя?',
      `Вы хотите удалить ${this.user.firstName} ${this.user.lastName}. Действие нельзя отменить`,
      'Удалить',
      'Закрыть',
      true,
      () => this.deleteUser(id)
    )
  }

  private deleteUser(id: string) {
    this.dataService.deleteUser(id).subscribe({
      next: () => {
        this.notificationService.showNotification('Успешно!', 'Пользователь успешно удален.', true)
        this.location.back()
      }
    })
  }
}
