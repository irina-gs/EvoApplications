import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './page-components/main-page/main-page.component';
import { RecipeCatalogPageComponent } from './page-components/recipe-catalog-page/recipe-catalog-page.component';
import { AuthorizationPageComponent } from './page-components/authorization-page/authorization-page.component';
import { RegistrationPageComponent } from './page-components/registration-page/registration-page.component';
import { ErrorPageComponent } from './page-components/error-page/error-page.component';
import { ErrorAccessDeniedPageComponent } from './page-components/error-access-denied-page/error-access-denied-page.component';
import { MainLayoutComponent } from './layout-components/main-layout/main-layout.component';
import { ErrorLayoutComponent } from './layout-components/error-layout/error-layout.component';
import { RecipePageComponent } from './page-components/recipe-page/recipe-page.component';
import { CreateRecipePageComponent } from './page-components/create-recipe-page/create-recipe-page.component';
import { AccessUserRoleGuard } from './guards/access-user-role.guard';
import { AccessAdminRoleGuard } from './guards/access-admin-role.guard';
import { PreFetchingRecipeResolver } from './services/resolver/pre-fetching-recipe.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { 
        path: '', 
        component: MainPageComponent 
      },
      { 
        path: 'recipes', 
        component: RecipeCatalogPageComponent 
      },
      { 
        path: 'recipes/:id', 
        component: RecipePageComponent, 
        resolve: {recipe: PreFetchingRecipeResolver} 
      },
      {
        path: 'create-recipe',
        component: CreateRecipePageComponent,
        canActivate: [AccessUserRoleGuard]
      },
      { 
        path: 'authorization', 
        component: AuthorizationPageComponent 
      },
      { 
        path: 'registration', 
        component: RegistrationPageComponent 
      },
      {
        path: 'admin',
        loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
        canActivate: [AccessAdminRoleGuard],
      }
    ]
  },
  {
    path: '',
    component: ErrorLayoutComponent,
    children: [
      { 
        path: 'error-access-denied', 
        component: ErrorAccessDeniedPageComponent 
      },
      { 
        path: '**', 
        component: ErrorPageComponent 
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
