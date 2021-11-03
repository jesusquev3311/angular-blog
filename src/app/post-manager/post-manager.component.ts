import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post/post.model";

@Component({
  selector: "app-post-manager",
  templateUrl: "./post-manager.component.html",
  styleUrls: ["./post-manager.component.scss"],
})
export class PostManagerComponent implements OnInit {
  posts: Post[] = [];

  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {
    if (this.posts.length <= 0) {
      this.dataProvider();
    }
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe(
      (posts) => (this.posts = posts),
      (err) => console.error(err)
    );
  }

  deleteProvider(event) {
    const { index, id } = event;
    /* 
        As the API doesn't really delete the element, 
        I've simulated the removel from the posts array
      */
    this.PostsService.deleteById(id).subscribe(
      (resp) => {
        console.log(resp);
        this.posts.splice(index, 1);
      },
      (err) => console.error(err)
    );
  }
}
