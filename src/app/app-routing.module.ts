import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerItemDetailComponent } from './post-manager/manager-item-detail/manager-item-detail.component';
import { ManagerItemComponent } from './post-manager/manager-item/manager-item.component';
import { PostManagerComponent } from './post-manager/post-manager.component';
import { PostDetailComponent } from './posts-list/post-detail/post-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';


const routes: Routes = [
  {path: "", component: PostsListComponent },
  {path: "posts", component: PostsListComponent },
  {path: "posts/:id", component: PostDetailComponent },
  {path: "post-manager", component: PostManagerComponent },
  {path: "post-manager/:id", component: ManagerItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
