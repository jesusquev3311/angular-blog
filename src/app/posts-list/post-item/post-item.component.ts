import {
  AfterContentChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import { Post } from "src/app/shared/post/post.model";
import { User } from "src/app/shared/post/user.model";
@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit, OnChanges {
  @Input() post: Post;
  @Input() users: User[];
  user: User;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.users) {
      this.userProvider(this.users, this.post.userId);
    }
  }

  async userProvider(users: User[], userId: number) {
    const item = await users.filter((user) => user.id == userId);
    return (this.user = item[0]);
  }
}
