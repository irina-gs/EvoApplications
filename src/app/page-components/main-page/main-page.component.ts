import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  recipes: Recipe[] = []
  recipesSlider: Recipe[] = []
  recipesBest: Recipe[] = []
  recipesSuggested: Recipe[] = []

  constructor(
    private title: Title,
    private meta: Meta,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setPageMeta()

    this.dataService.getRecipes().subscribe({
      next: (response) => {
        this.recipes = response
        this.recipesSlider = this.dataService.getFirstRecipes(response, 3)
        this.recipesBest = this.dataService.getRandomRecipes(response, 6)
        this.recipesSuggested = this.dataService.getRandomRecipes(response, 4)
      }
    })
  }

  private setPageMeta() {
    this.title.setTitle('Foodie: Главная')

    this.meta.updateTag({ name: 'title', content: 'Foodie: Главная' })
    this.meta.updateTag({ name: 'description', content: 'Сборник кулинарных рецептов, для всей семьи' })

    this.meta.updateTag({ property: 'og:title', content: 'Foodie: Главная' })
    this.meta.updateTag({ property: 'og:description', content: 'Сборник кулинарных рецептов, для всей семьи' })

    this.meta.removeTag('name=image')
    this.meta.removeTag('property="og:image"')
  }
}
