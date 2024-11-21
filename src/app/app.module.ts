import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostEditingComponent } from './components/post-editing/post-editing.component';
import { AccessRoleGuard } from './access-role.guard';
import { RoleService } from './services/role.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PostListComponent,
    PostComponent,
    PostEditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, RoleService, AccessRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
