import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data/data.service';
import { ModalWindowService } from 'src/app/services/modal-window/modal-window.service';

@Component({
  selector: 'app-administration-recipes-management',
  templateUrl: './administration-recipes-management.component.html',
  styleUrls: ['./administration-recipes-management.component.css']
})
export class AdministrationRecipesManagementComponent implements OnInit {
  recipeList: Recipe[] = []

  constructor(
    private title: Title,
    private dataService: DataService,
    private modalWindowService: ModalWindowService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Foodie: Управление рецептами')

    this.dataService.getRecipes().subscribe({
      next: (response) => {
        this.recipeList = response
      }
    })
  }

  onDelete(id: string) {
    this.modalWindowService.openModalWindow(
      'Удалить этот рецепт?',
      'Вы хотите удалить этот рецепт',
      'Удалить',
      'Закрыть',
      true,
      () => this.deleteRecipe(id)
    )
  }

  private deleteRecipe(id: string) {
    this.dataService.deleteRecipe(id).subscribe({
      next: () => {
        this.recipeList = this.recipeList.filter(recipe => recipe.id !== id)
      }
    })
  }
}
