import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from 'src/app/components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private viewContainerRef!: ViewContainerRef
  private componentRef!: ComponentRef<NotificationComponent>

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef
  }

  showNotification(
    title: string,
    message: string,
    isSuccess: boolean,
    duration: number = 5000
  ) {

    if (!this.viewContainerRef) {
      return
    }

    this.viewContainerRef.clear()
    this.componentRef = this.viewContainerRef.createComponent(NotificationComponent)

    this.componentRef.instance.title = title
    this.componentRef.instance.message = message
    this.componentRef.instance.isSuccess = isSuccess
    this.componentRef.instance.duration = duration

    this.componentRef.instance.hide = this.hideNotification.bind(this)

    setTimeout(() => {
      this.hideNotification()
    }, duration)
  }

  hideNotification() {
    this.viewContainerRef.clear()
  }
}
