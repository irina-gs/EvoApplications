import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationFooterService {
  private readonly notificationKey = 'hasSeenNotification'

  shouldShowNotification() {
    return !localStorage.getItem(this.notificationKey)
  }

  hideNotification() {
    localStorage.setItem(this.notificationKey, 'true')
  }
}
