import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './posts-list/post-detail/post-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';


const routes: Routes = [
  {path: "", component: PostsListComponent },
  {path: "posts", component: PostsListComponent },
  {path: "posts/:id", component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
