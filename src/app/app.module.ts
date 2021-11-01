import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostItemComponent } from './posts-list/post-item/post-item.component';
import { PostDetailComponent } from './posts-list/post-detail/post-detail.component';
import { CommentsComponent } from './posts-list/post-detail/comments/comments.component';
import { CommentsEditorComponent } from './posts-list/post-detail/comments-editor/comments-editor.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostItemComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentsEditorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
