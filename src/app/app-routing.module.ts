import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { ErrorComponent } from './components/error/error.component';
import { PostComponent } from './components/post/post.component';
import { PostEditingComponent } from './components/post-editing/post-editing.component';
import { AccessRoleGuard } from './access-role.guard';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    canActivateChild: [AccessRoleGuard],
    children: [
      {
        path: 'editing',
        component: PostEditingComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
