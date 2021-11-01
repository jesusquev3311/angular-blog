import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../shared/post/post.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post-manager',
  templateUrl: './post-manager.component.html',
  styleUrls: ['./post-manager.component.scss']
})
export class PostManagerComponent implements OnInit {
  posts: Post[] = [];
  postsChanged = new Subject<Post[]>();


  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {
    if(this.posts.length <= 0){
      this.dataProvider();
    }
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe((posts) => (this.posts = posts));
  }

  deleteProvider(event){
    const { index, id } = event;
      /* 
        As the API doesn't really delete the element, 
        I've simulated the removel from the posts array
      */
      if(this.posts.splice(index, 1)){
        this.PostsService.deleteById(id)
      }
  }
}
