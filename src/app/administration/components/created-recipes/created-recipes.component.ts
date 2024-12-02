import { Component, Input } from '@angular/core';
import { RecipeSimple } from 'src/app/interfaces/recipe-simple';

@Component({
  selector: 'app-created-recipes',
  templateUrl: './created-recipes.component.html',
  styleUrls: ['./created-recipes.component.css']
})
export class CreatedRecipesComponent {
  @Input() recipeList: RecipeSimple[] = []
}
