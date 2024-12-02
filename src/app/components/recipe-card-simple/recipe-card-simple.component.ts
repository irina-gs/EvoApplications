import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-recipe-card-simple',
  templateUrl: './recipe-card-simple.component.html',
  styleUrls: ['./recipe-card-simple.component.css']
})
export class RecipeCardSimpleComponent {
  @Input() recipe: Recipe = {
    body: '',
    title: '',
    tags: [],
    image: '',
    timeCooking: 0
  }
}
