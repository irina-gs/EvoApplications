import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { RecipeFormComponent } from '../components/recipe-form/recipe-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserCardComponent,
    RecipeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserCardComponent,
    RecipeFormComponent
  ]
})
export class SharedModule { }
