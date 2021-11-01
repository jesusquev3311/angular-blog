import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post/post.model";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {
    this.dataProvider();
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe((posts) => (this.posts = posts));
  }
}
