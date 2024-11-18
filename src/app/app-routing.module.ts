import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PreFetchingResolver } from './services/pre-fetching.resolver';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
    resolve: {post: PreFetchingResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
