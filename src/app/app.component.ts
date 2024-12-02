import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationService } from './services/notification/notification.service';
import { Store } from '@ngxs/store';
import { UserState } from './state/user.state';
import { ResetUser } from './state/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('notification', { read: ViewContainerRef, static: true })
  private viewContainerRef!: ViewContainerRef

  constructor(
    private notificationService: NotificationService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.notificationService.setRootViewContainerRef(this.viewContainerRef)

    this.checkingToken()
  }

  private checkingToken() {
    const expiresIn = this.store.selectSnapshot(UserState.getExpiresIn)

    if (expiresIn) {
      const currentTime = new Date().getTime()

      if (currentTime >= expiresIn * 1000) {
        this.store.dispatch(new ResetUser())
        this.notificationService.showNotification('Время вашего сеанса истекло', 'Войдите в систему еще раз', false)
      }

    }
  }
}