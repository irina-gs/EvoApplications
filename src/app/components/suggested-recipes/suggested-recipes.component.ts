import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-suggested-recipes',
  templateUrl: './suggested-recipes.component.html',
  styleUrls: ['./suggested-recipes.component.css']
})
export class SuggestedRecipesComponent {
  @Input() title: string = ''
  @Input() text?: string
  @Input() recipeList: Recipe[] = []
}