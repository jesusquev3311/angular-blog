import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/shared/post/post.model';
import { PostComment } from "src/app/shared/post/comment.model";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  comments: PostComment[];
  fullPost = {}

  constructor(
    private route: ActivatedRoute, 
    private Posts: PostsService, 
    private Comments: CommentsService
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    
    this.detailProvider(id);
    this.commentsProvider(id);
  }

  detailProvider(id: string){
    return this.Posts.getById(id).subscribe(post => this.post = post) || {};
  }

  commentsProvider(id:string){
    return this.Comments.getComments().subscribe((comments) => {
      console.log("before filter: ", comments)
      const filteredComments = comments.filter(({postId})=> +id === +postId);
      console.log("after Filter: ", filteredComments);
      return this.comments =filteredComments;
    });
  }



}
