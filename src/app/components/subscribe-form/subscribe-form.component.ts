import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent {
  email: string = ''

  constructor(private notificationService: NotificationService) { }

  subscribe() {
    this.notificationService.showNotification('Вы подписаны!', 'Теперь вы будете первыми получать новые рецепты.', true)
  }
}
