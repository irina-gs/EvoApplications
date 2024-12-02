import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  title: string = ''
  message: string = ''
  isSuccess: boolean = true
  duration: number = 5000

  hide: () => void = () => { }
}
