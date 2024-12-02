import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipe: Recipe = {
    body: '',
    title: '',
    tags: [],
    image: '',
    timeCooking: 0
  }

  recipesOther: Recipe[] = []
  recipesSuggested: Recipe[] = []

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.recipe = data['recipe']

      this.setPageMeta()
      this.getRecipeList()
    })
  }

  private getRecipeList() {
    this.dataService.getRecipes().subscribe({
      next: (response) => {
        this.recipesOther = this.dataService.getRandomRecipes(response, 3)
        this.recipesSuggested = this.dataService.getRandomRecipes(response, 4)
      }
    })
  }

  private setPageMeta() {
    this.title.setTitle(`Foodie: ${this.recipe.title}`)

    this.meta.updateTag({ name: 'title', content: this.recipe.title })
    this.meta.updateTag({ name: 'description', content: this.recipe.body })
    this.meta.updateTag({ name: 'image', content: this.recipe.image })

    this.meta.updateTag({ property: 'og:title', content: this.recipe.title })
    this.meta.updateTag({ property: 'og:description', content: this.recipe.body })
    this.meta.updateTag({ property: 'og:image', content: this.recipe.image })
  }
}
