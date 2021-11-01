import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { Post } from 'src/app/shared/post/post.model';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private router: Router, private Posts: PostsService, private User: UsersService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    
    this.detailProvider(id);
  }

  detailProvider(id: string){
    return this.Posts.getById(id).subscribe(post => this.post = post) || {};
  }



}
