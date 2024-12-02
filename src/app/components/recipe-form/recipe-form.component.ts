import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/interfaces/recipe';
import { DataService } from 'src/app/services/data/data.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit, OnChanges {
  @Input() titlePage: string = ''
  @Input() buttonTitle: string = ''
  @Input() recipe?: Recipe

  form: FormGroup = new FormGroup({})

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private notificationService: NotificationService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipe'] && this.recipe) {
      if (this.recipe) {
        this.prefillForm(this.recipe);
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tag: ['', Validators.required],
      timeCooking: [null, Validators.required],
      foodValue: this.formBuilder.group({
        proteins: [null, Validators.required],
        fats: [null, Validators.required],
        carbohydrates: [null, Validators.required],
        calories: [null, Validators.required]
      }),
      cookingSteps: this.formBuilder.array([
        this.formBuilder.group({
          title: ['', Validators.required],
          description: ['', Validators.required]
        })
      ]),
      ingredients: this.formBuilder.array([
        this.formBuilder.group({
          title: ['', Validators.required],
          description: ['', Validators.required]
        })
      ])
    })
  }

  private prefillForm(recipe: Recipe) {
    this.form.patchValue({
      title: recipe.title,
      body: recipe.body,
      tag: recipe.tags.join(', '),
      timeCooking: recipe.timeCooking,
      foodValue: {
        proteins: recipe.foodValue?.proteins,
        fats: recipe.foodValue?.fats,
        carbohydrates: recipe.foodValue?.carbohydrates,
        calories: recipe.foodValue?.calories
      }
    })

    if (recipe.cookingSteps && recipe.cookingSteps.length > 0) {
      const cookingSteps = this.cookingSteps
      cookingSteps.removeAt(0)

      recipe.cookingSteps.forEach(step => {
        cookingSteps.push(this.formBuilder.group({
          title: [step.title, Validators.required],
          description: [step.description, Validators.required]
        }))
      })
    }

    if (recipe.ingredients && recipe.ingredients.length > 0) {
      const ingredients = this.ingredients
      ingredients.removeAt(0)

      recipe.ingredients.forEach(ingredient => {
        ingredients.push(this.formBuilder.group({
          title: [ingredient.title, Validators.required],
          description: [ingredient.description, Validators.required]
        }))
      })
    }
  }

  get title() {
    return this.form.get('title')
  }

  get body() {
    return this.form.get('body')
  }

  get tag() {
    return this.form.get('tag')
  }

  get timeCooking() {
    return this.form.get('timeCooking')
  }

  get foodValue() {
    return this.form.get('foodValue')
  }

  get cookingSteps() {
    return this.form.get('cookingSteps') as FormArray
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray
  }

  addCookingStep() {
    const cookingStep = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.cookingSteps.push(cookingStep)
  }

  addIngredient() {
    const ingredient = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.ingredients.push(ingredient)
  }

  sendData() {
    if (this.form.invalid) {
      return
    }

    const recipe = { ...this.form.value, tags: [this.form.value.tag] }

    if (this.recipe) {
      this.updateRecipe(recipe)
    } else {
      this.createRecipe(recipe)
    }
  }

  private createRecipe(recipe: Recipe) {
    this.dataService.createRecipe(recipe).subscribe({
      next: () => {
        this.notificationService.showNotification('Рeцепт создан!', 'Ваш рецепт успешно создан.', true)
        this.location.back()
      }
    })
  }

  private updateRecipe(recipe: Recipe) {
    this.dataService.updateRecipe(recipe, this.recipe?.id ?? '').subscribe({
      next: () => {
        this.notificationService.showNotification('Рeцепт обновлен!', 'Рецепт успешно обновлен.', true)
        this.router.navigateByUrl('/admin/recipes')
      }
    })
  }
}
