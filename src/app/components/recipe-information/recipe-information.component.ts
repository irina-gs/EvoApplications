import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngxs/store';
import { Recipe } from 'src/app/interfaces/recipe';
import { ModalWindowService } from 'src/app/services/modal-window/modal-window.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { FavoriteRecipeListState } from 'src/app/state/favorite-recipe-list.state';
import { UpdateFavoriteRecipeList } from 'src/app/state/model/favorite-recipe-list.model';

@Component({
  selector: 'app-recipe-information',
  templateUrl: './recipe-information.component.html',
  styleUrls: ['./recipe-information.component.css']
})
export class RecipeInformationComponent implements OnChanges {
  @Input() recipe: Recipe = {
    body: '',
    title: '',
    tags: [],
    image: '',
    timeCooking: 0
  }

  isFavorite: boolean = false

  constructor(
    private store: Store,
    private notificationService: NotificationService,
    private modalWindowService: ModalWindowService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipe'] && this.recipe.id) {
      this.store.select(FavoriteRecipeListState.isFavoriteRecipe).subscribe({
        next: (func) => {
          if (this.recipe.id) {
            this.isFavorite = func(this.recipe.id)
          }
        }
      })
    }
  }

  toggleFavorite() {
    if (this.recipe.id) {
      this.store.dispatch(new UpdateFavoriteRecipeList(this.recipe.id))
    }

    if (this.isFavorite) {
      this.notificationService.showNotification(
        'Добавлено в избранное',
        'Сохранили этот рецепт для вас',
        true,
        3000
      )
    }
  }

  print() {
    window.print()
  }

  share() {
    this.modalWindowService.openModalWindow(
      'Поделиться этим рецептом?',
      'Вы хотите поделиться этим рецептом со всеми?',
      'Поделиться',
      'Закрыть',
      false,
      () => this.modalWindowService.closeModalWindow()
    )
  }
}
