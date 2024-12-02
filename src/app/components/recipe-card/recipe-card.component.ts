import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Recipe } from 'src/app/interfaces/recipe';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { FavoriteRecipeListState } from 'src/app/state/favorite-recipe-list.state';
import { UpdateFavoriteRecipeList } from 'src/app/state/model/favorite-recipe-list.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
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
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.store.select(FavoriteRecipeListState.isFavoriteRecipe).subscribe({
      next: (func) => {
        if (this.recipe.id) {
          this.isFavorite = func(this.recipe.id)
        }
      }
    })
  }

  toggleFavorite(event: MouseEvent, id: string) {
    event.stopPropagation()
    event.preventDefault()

    this.store.dispatch(new UpdateFavoriteRecipeList(id))

    if (this.isFavorite) {
      this.showNotification()
    }
  }

  private showNotification() {
    this.notificationService.showNotification(
      'Добавлено в избранное',
      'Сохранили этот рецепт для вас',
      true,
      3000
    )
  }
}
