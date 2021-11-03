import { Component, Input, OnInit } from "@angular/core";
import { NotificationsService } from "src/app/services/notifications.service";
import { UsersService } from "src/app/services/users.service";
import { Post } from "src/app/shared/post/post.model";
import { User } from "src/app/shared/post/user.model";
@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  user: User;

  constructor(
    private Users: UsersService,
    private notify: NotificationsService
  ) {}

  ngOnInit(): void {
    this.userProvider(this.post.userId);
  }

  userProvider(id: number) {
    this.Users.getUser(id).subscribe(
      (user) => (this.user = user),
      (err) => {
        console.error(err);
        this.notify.error("Something Went Wrong");
      }
    );
  }
}
