import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { DataService } from '../data/data.service';
import { NotificationService } from '../notification/notification.service';
import { UserFull } from 'src/app/interfaces/user-full';

@Injectable({
  providedIn: 'root'
})
export class PreFetchingUserResolver {
  constructor(
    private dataService: DataService,
    private notificationService: NotificationService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserFull> {
    const userId = route.paramMap.get('id')
    if (userId) {
      return this.dataService.getUser(userId)
    } else {
      this.showNotification()
      return throwError(() => new Error('Id not found'))
    }
  }

  private showNotification() {
    this.notificationService.showNotification(
      'Ошибка!',
      'Пользователь не найден.',
      false
    )
  }
}
