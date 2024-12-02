import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ServerStatusCode } from 'src/app/enum/server-status-code.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error)
        return throwError(() => error)
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    const isAuth = error.url?.includes('/sign')
    const errorText = this.getErrorText(error.status, isAuth)
    this.notificationService.showNotification(errorText.title, errorText.message, false)
  }

  private getErrorText(errorStatus: number, isAuth: boolean = false) {
    switch (errorStatus) {
      
      case ServerStatusCode.NoInternet: {
        return { title: 'Ошибка!', message: 'Проверьте подключение к интернету.' }
      }

      case ServerStatusCode.ValidationError: {
        return { title: 'Ошибка!', message: 'Некоторые данные введены некорректно. Исправьте ошибки и попробуйте снова.' }
      }

      case ServerStatusCode.Unauthorized: {
        if (isAuth) {
          return { title: 'Ошибка авторизации!', message: 'Неверный пароль.' }
        } else {
          return { title: 'Ошибка!', message: 'Вы не авторизованы. Пожалуйста, войдите в систему.' }
        }
      }

      case ServerStatusCode.Forbidden: {
        if (isAuth) {
          return { title: 'Ошибка!', message: 'Ваш аккаунт заблокирован.' }
        } else {
          return { title: 'Доступ запрещен!', message: 'У вас недостаточно прав для выполнения этого действия.' }
        }
      }

      case ServerStatusCode.NotFound: {
        return { title: 'Ошибка!', message: 'Ресурс не найден.' }
      }

      default: {
        return { title: 'Ошибка!', message: 'Что-то пошло не так...' }
      }
    }
  }
}
