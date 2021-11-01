import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { PostComment } from "../shared/post/comment.model";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  url: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http
      .get<PostComment[]>(this.url)
      .pipe(map((comments) => comments));
  }

  create(comment) {
    return this.http
      .post<PostComment>(this.url, comment)
      .pipe(map((resp) => resp));
  }
}
