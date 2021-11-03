import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private router: Router,
    private Posts: PostsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.detailProvider(id);
  }

  detailProvider(id: string) {
    return this.Posts.getById(id).subscribe(
      (post) => (this.post = post),
      (err) => console.error(err)
    );
  }

  update(post: Post) {
    if (post.id) {
      return this.Posts.update(post).subscribe(
        (resp) => {
          resp;
        },
        (err) => err
      );
    }
    return this.Posts.create(post);
  }
}
