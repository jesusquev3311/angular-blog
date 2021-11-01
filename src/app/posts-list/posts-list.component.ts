import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { UsersService } from "../services/users.service";
import { Post } from "../shared/post/post.model";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private PostsService: PostsService, private UserService: UsersService) {}

  ngOnInit(): void {
    this.dataProvider();
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe((posts) => (this.posts = posts));
  }
  userProvider(id: number) {
    const user = this.UserService.getUser(id);
    return user;
  }
}
