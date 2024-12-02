import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationMainPageComponent } from './page-components/administration-main-page/administration-main-page.component';
import { AdministrationEditRecipePageComponent } from './page-components/administration-edit-recipe-page/administration-edit-recipe-page.component';
import { AdministrationUserDetailPageComponent } from './page-components/administration-user-detail-page/administration-user-detail-page.component';
import { AdministrationUsersManagementComponent } from './page-components/administration-users-management/administration-users-management.component';
import { AdministrationRecipesManagementComponent } from './page-components/administration-recipes-management/administration-recipes-management.component';
import { SharedModule } from '../shared/shared.module';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { CreatedRecipesComponent } from './components/created-recipes/created-recipes.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdministrationMainPageComponent,
    AdministrationUsersManagementComponent,
    AdministrationRecipesManagementComponent,
    AdministrationEditRecipePageComponent,
    AdministrationUserDetailPageComponent,
    InfoBoxComponent,
    GeneralInformationComponent,
    AccountInformationComponent,
    CreatedRecipesComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdministrationModule { }
