import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/state/user.state';
import { ResetUser } from 'src/app/state/model/user.model';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private store: Store,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.store.selectSnapshot(UserState.getToken)
    const expiresIn = this.store.selectSnapshot(UserState.getExpiresIn)

    if (token && expiresIn && this.isExpiredToken(expiresIn)) {
      this.store.dispatch(new ResetUser())

      this.notificationService.showNotification('Время вашего сеанса истекло', 'Войдите в систему еще раз', false)
      this.router.navigateByUrl('/')

      return throwError(() => new Error('Token expired'))
    }

    if (token && this.isNeededToken(request)) {
      request = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } })
    }

    return next.handle(request)
  }

  private isNeededToken(request: HttpRequest<unknown>) {
    return request.headers.get('Needs-Auth') === 'true'
  }

  private isExpiredToken(expiresIn: number) {
    const currentTime = new Date().getTime()

    return (currentTime >= expiresIn * 1000)
  }
}
