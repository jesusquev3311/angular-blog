import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostItemComponent } from './posts-list/post-item/post-item.component';
import { PostDetailComponent } from './posts-list/post-detail/post-detail.component';
import { CommentsComponent } from './posts-list/post-detail/comments/comments.component';
import { CommentsEditorComponent } from './posts-list/post-detail/comments-editor/comments-editor.component';
import { HeaderComponent } from './header/header.component';
import { PostManagerComponent } from './post-manager/post-manager.component';
import { ManagerItemComponent } from './post-manager/manager-item/manager-item.component';
import { ManagerItemDetailComponent } from './post-manager/manager-item-detail/manager-item-detail.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PostSearchComponent } from './posts-list/post-search/post-search.component';
import { PostSortComponent } from './posts-list/post-sort/post-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostItemComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentsEditorComponent,
    HeaderComponent,
    PostManagerComponent,
    ManagerItemComponent,
    ManagerItemDetailComponent,
    FooterComponent,
    PostSearchComponent,
    PostSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
