import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { ItemComponent } from './main/item/item.component';
import { DetailsComponent } from './main/item/details/details.component';
import { ListComponent } from './main/item/list/list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'list', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
