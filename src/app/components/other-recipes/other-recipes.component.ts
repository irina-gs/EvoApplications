import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-other-recipes',
  templateUrl: './other-recipes.component.html',
  styleUrls: ['./other-recipes.component.css']
})
export class OtherRecipesComponent {
  @Input() recipeList: Recipe[] = []

}
