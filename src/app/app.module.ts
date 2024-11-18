import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AddIdInterceptor } from './services/add-id.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AddIdInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
