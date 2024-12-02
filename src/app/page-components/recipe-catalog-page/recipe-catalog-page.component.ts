import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-recipe-catalog-page',
  templateUrl: './recipe-catalog-page.component.html',
  styleUrls: ['./recipe-catalog-page.component.css']
})
export class RecipeCatalogPageComponent implements OnInit {
  recipeList: Recipe[] = []
  
  constructor(
    private title: Title,
    private meta: Meta,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setPageMeta()

    this.dataService.getRecipes().subscribe({
      next: (response) => {
        this.recipeList = response
      }
    })
  }

  private setPageMeta() {
    this.title.setTitle('Foodie: Каталог рецептов')

    this.meta.updateTag({ name: 'title', content: 'Foodie: Каталог рецептов' })
    this.meta.updateTag({ name: 'description', content: 'Все самые лучшие рецепты собраны здесь' })
    
    this.meta.updateTag({ property: 'og:title', content: 'Foodie: Каталог рецептов' })
    this.meta.updateTag({ property: 'og:description', content: 'Все самые лучшие рецепты собраны здесь' })

    this.meta.removeTag('name=image')
    this.meta.removeTag('property="og:image"')
  }
}
