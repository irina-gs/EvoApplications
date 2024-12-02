import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-best-recipes',
  templateUrl: './best-recipes.component.html',
  styleUrls: ['./best-recipes.component.css']
})
export class BestRecipesComponent implements OnChanges {
  @Input() recipeList: Recipe[] = []

  shortRecipeList: Recipe[] = []
  isHidden: boolean = false

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipeList'] && this.recipeList) {
      this.shortRecipeList = this.recipeList.slice(0, 3)
      this.isHidden = (this.shortRecipeList.length === this.recipeList.length)
    }
  }

  showMore() {
    this.shortRecipeList = this.recipeList
    this.isHidden = true
  }
}
