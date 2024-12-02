import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data/data.service';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-administration-edit-recipe-page',
  templateUrl: './administration-edit-recipe-page.component.html',
  styleUrls: ['./administration-edit-recipe-page.component.css']
})
export class AdministrationEditRecipePageComponent implements OnInit {
  recipe: Recipe = {
    body: '',
    title: '',
    tags: [],
    image: '',
    timeCooking: 0
  }

  constructor(
    private title: Title,
    private dataService: DataService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Редактирование рецепта')

    this.route.paramMap.subscribe(params => {
      const recipeId = params.get('id')
      if (recipeId) {
        this.getRecipe(recipeId)
      } else {
        this.showNotification()
        this.location.back()
      }
    })
  }

  private getRecipe(id: string) {
    this.dataService.getRecipe(id).subscribe({
      next: (response) => {
        this.recipe = response
      },
      error: () => { this.location.back() }
    })
  }

  private showNotification() {
    this.notificationService.showNotification(
      'Ошибка!',
      'Рецепт не найден.',
      false
    )
  }
}
