import { Component, OnInit } from '@angular/core';
import { NotificationFooterService } from 'src/app/services/notification/notification-footer.service';

@Component({
  selector: 'app-notification-footer',
  templateUrl: './notification-footer.component.html',
  styleUrls: ['./notification-footer.component.css']
})
export class NotificationFooterComponent implements OnInit {
  isShow = false

  constructor(private notificationService: NotificationFooterService) { }

  ngOnInit(): void {
    this.isShow = this.notificationService.shouldShowNotification()
  }

  hide() {
    this.notificationService.hideNotification()
    this.isShow = false
  }
}
