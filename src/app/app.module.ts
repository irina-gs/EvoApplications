import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AdministrationModule } from './administration/administration.module';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './page-components/main-page/main-page.component';
import { RecipeCatalogPageComponent } from './page-components/recipe-catalog-page/recipe-catalog-page.component';
import { UserState } from './state/user.state';
import { AuthorizationPageComponent } from './page-components/authorization-page/authorization-page.component';
import { RegistrationPageComponent } from './page-components/registration-page/registration-page.component';
import { AuthorizationRegistrationFormComponent } from './components/authorization-registration-form/authorization-registration-form.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DataService } from './services/data/data.service';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';
import { ErrorComponent } from './components/error/error.component';
import { ErrorPageComponent } from './page-components/error-page/error-page.component';
import { ErrorAccessDeniedPageComponent } from './page-components/error-access-denied-page/error-access-denied-page.component';
import { MainLayoutComponent } from './layout-components/main-layout/main-layout.component';
import { ErrorLayoutComponent } from './layout-components/error-layout/error-layout.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { NotificationFooterComponent } from './components/notification-footer/notification-footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BestRecipesComponent } from './components/best-recipes/best-recipes.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { SuggestedRecipesComponent } from './components/suggested-recipes/suggested-recipes.component';
import { FavoriteRecipeListState } from './state/favorite-recipe-list.state';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { RecipePageComponent } from './page-components/recipe-page/recipe-page.component';
import { RecipeInformationComponent } from './components/recipe-information/recipe-information.component';
import { StepListComponent } from './components/step-list/step-list.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { RecipeCardSimpleComponent } from './components/recipe-card-simple/recipe-card-simple.component';
import { OtherRecipesComponent } from './components/other-recipes/other-recipes.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { TokenInterceptor } from './interceptors/token/token.interceptor';
import { CreateRecipePageComponent } from './page-components/create-recipe-page/create-recipe-page.component';
import { DateFormatPipe } from './pipe/date-format.pipe';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    RecipeCatalogPageComponent,
    AuthorizationPageComponent,
    RegistrationPageComponent,
    AuthorizationRegistrationFormComponent,
    NotificationComponent,
    ErrorComponent,
    ErrorPageComponent,
    ErrorAccessDeniedPageComponent,
    MainLayoutComponent,
    ErrorLayoutComponent,
    ModalWindowComponent,
    NotificationFooterComponent,
    SliderComponent,
    BadgeComponent,
    BestRecipesComponent,
    RecipeCardComponent,
    SuggestedRecipesComponent,
    WhyChooseUsComponent,
    SubscribeFormComponent,
    RecipePageComponent,
    RecipeInformationComponent,
    StepListComponent,
    ActionButtonComponent,
    RecipeCardSimpleComponent,
    OtherRecipesComponent,
    CommentListComponent,
    CreateRecipePageComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState, FavoriteRecipeListState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AdministrationModule,
    SharedModule
  ],
  providers: [DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
