import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "../services/notifications.service";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post/post.model";

@Component({
  selector: "app-post-manager",
  templateUrl: "./post-manager.component.html",
  styleUrls: ["./post-manager.component.scss"],
})
export class PostManagerComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private PostsService: PostsService,
    private notify: NotificationsService
  ) {}

  ngOnInit(): void {
    if (this.posts.length <= 0) {
      this.dataProvider();
    }
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (err) => {
        console.error(err);
        this.notify.error("Something Went Wrong");
      }
    );
  }

  deleteProvider(event) {
    const { index, id } = event;
    /* 
        As the API doesn't really delete the element, 
        I've simulated the removel from the posts array
      */
    this.notify.confirm("Do you want to delete this Post?", () => {
      this.PostsService.deleteById(id).subscribe(
        (resp) => {
          this.notify.success("Deleted");
          this.posts.splice(index, 1);
          return resp;
        },
        (err) => {
          console.error(err);
          this.notify.error("Something went wrong");
        }
      );
    });
  }
}
