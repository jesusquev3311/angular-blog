import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { Post } from "../shared/post/post.model";
import sortingProvier from "../shared/utils/utils.js";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  searchAcc: Post[] = [];

  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {
    this.dataProvider();
  }

  dataProvider() {
    return this.PostsService.getAll().subscribe(
      (posts: Post[]) => (this.posts = posts)
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
    this.posts = this.posts.sort(sortingProvier(sortType));
  }
}
