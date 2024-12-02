import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationMainPageComponent } from './page-components/administration-main-page/administration-main-page.component';
import { AdministrationUsersManagementComponent } from './page-components/administration-users-management/administration-users-management.component';
import { AdministrationRecipesManagementComponent } from './page-components/administration-recipes-management/administration-recipes-management.component';
import { AdministrationUserDetailPageComponent } from './page-components/administration-user-detail-page/administration-user-detail-page.component';
import { AdministrationEditRecipePageComponent } from './page-components/administration-edit-recipe-page/administration-edit-recipe-page.component';
import { PreFetchingUserResolver } from '../services/resolver/pre-fetching-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdministrationMainPageComponent,
    children: [
      { 
        path: 
        'users', component: AdministrationUsersManagementComponent 
      },
      { 
        path: 
        'recipes', component: AdministrationRecipesManagementComponent 
      }
    ]
  },
  { 
    path: 'users/:id', 
    component: AdministrationUserDetailPageComponent,
    resolve: {user: PreFetchingUserResolver} 
  },
  { 
    path: 'recipes/:id', 
    component: AdministrationEditRecipePageComponent 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
