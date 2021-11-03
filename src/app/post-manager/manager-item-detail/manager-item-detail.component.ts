import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NotificationsService } from "src/app/services/notifications.service";
import { PostsService } from "src/app/services/posts.service";
import { Post } from "src/app/shared/post/post.model";

@Component({
  selector: "app-manager-item-detail",
  templateUrl: "./manager-item-detail.component.html",
  styleUrls: ["./manager-item-detail.component.scss"],
})
export class ManagerItemDetailComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private Posts: PostsService,
    private notify: NotificationsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.detailProvider(id);
  }

  detailProvider(id: string) {
    return this.Posts.getById(id).subscribe(
      (post) => (this.post = post),
      (err) => {
        console.error(err);
        this.notify.error("something went wrong");
      }
    );
  }

  update(post: Post) {
    if (post.id) {
      return this.Posts.update(post).subscribe(
        (resp) => {
          this.notify.success("Updated Successfully");
          return resp;
        },
        (err) => {
          console.error(err);
          this.notify.error("Something went wrong");
        }
      );
    }
    return this.Posts.create(post).subscribe(
      (resp) => {
        this.notify.success("Created Successfully");
        return resp;
      },
      (err) => {
        console.error(err);
        this.notify.error("Something went wrong");
      }
    );
  }
}
