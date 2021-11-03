import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommentsService } from "src/app/services/comments.service";
import { PostsService } from "src/app/services/posts.service";
import { Post } from "src/app/shared/post/post.model";
import { PostComment } from "src/app/shared/post/comment.model";
import { NotificationsService } from "src/app/services/notifications.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  comments: PostComment[];
  fullPost = {};

  constructor(
    private route: ActivatedRoute,
    private Posts: PostsService,
    private Comments: CommentsService,
    private notify: NotificationsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.detailProvider(id);
    this.commentsProvider(id);
  }

  detailProvider(id: string) {
    return this.Posts.getById(id).subscribe(
      (post) => {
        this.post = post;
      },
      (err) => {
        console.error(err);
        this.notify.error("Something went wrong");
      }
    );
  }

  commentsProvider(id: string) {
    return this.Comments.getComments().subscribe(
      (comments) => {
        const filteredComments = comments.filter(
          ({ postId }) => +id === +postId
        );

        return (this.comments = filteredComments);
      },
      (err) => {
        console.error(err);
        this.notify.error("Something went wrong");
      }
    );
  }

  addComment(item: Comment) {
    return this.Comments.create(item).subscribe(
      (resp) => {
        this.comments.push(resp);
        this.notify.success("Comment added");
      },
      (err) => {
        console.error(err);
        this.notify.error("Something went wrong");
      }
    );
  }
}
