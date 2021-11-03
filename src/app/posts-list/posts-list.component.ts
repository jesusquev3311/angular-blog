import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "../services/notifications.service";
import { PostsService } from "../services/posts.service";
import { UsersService } from "../services/users.service";
import { Post } from "../shared/post/post.model";
import { User } from "../shared/post/user.model";
import { sortProvider } from "../shared/utils/utils.js";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  searchAcc: Post[] = [];
  users: User[] = [];
  user: User;

  constructor(
    private PostsService: PostsService,
    private UsersService: UsersService,
    private notify: NotificationsService
  ) {}

  ngOnInit() {
    this.dataProvider();
    this.usersProvider();
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      },
      (err) => {
        console.error(err);
        this.notify.error("Something went wrong");
      }
    );
  }

  async usersProvider() {
    await this.UsersService.getAll().subscribe(
      (users) => (this.users = users),
      (err) => {
        console.error(err);
        this.notify.error("Something went wrong");
      }
    );
  }

  searchProvider(data: string) {
    if (data) {
      this.searchAcc = this.posts;

      const result: Post[] = this.searchAcc.filter((post) => {
        let arrayelement = post.title.toLowerCase();

        return arrayelement.includes(data);
      });

      if (result.length) {
        this.posts = result;
      }
    } else {
      this.dataProvider();
    }
  }

  sortingService(sortType: string) {
    this.posts = this.posts.sort(sortProvider(sortType));
  }
}
