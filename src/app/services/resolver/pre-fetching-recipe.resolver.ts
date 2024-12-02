import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { DataService } from '../data/data.service';
import { NotificationService } from '../notification/notification.service';
import { Recipe } from 'src/app/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class PreFetchingRecipeResolver {
  constructor(
    private dataService: DataService,
    private notificationService: NotificationService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> {
    const recipeId = route.paramMap.get('id')
    if (recipeId) {
      return this.dataService.getRecipe(recipeId)
    } else {
      this.showNotification()
      return throwError(() => new Error('Id not found'))
    }
  }

  private showNotification() {
    this.notificationService.showNotification(
      'Ошибка!',
      'Рецепт не найден.',
      false
    )
  }
}
