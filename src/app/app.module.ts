import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { ItemComponent } from './main/item/item.component';
import { DetailsComponent } from './main/item/details/details.component';
import { ListComponent } from './main/item/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    ItemComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
