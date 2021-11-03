import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../shared/post/post.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post[]>(this.url).pipe(map((posts) => posts));
  }

  getById(id: string) {
    return this.http.get<Post>(`${this.url}/${id}`).pipe(map((post) => post));
  }

  deleteById(id: number) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(map((resp) => console.log(resp)));
  }

  update(item: Post) {
    return this.http
      .patch<Post>(`${this.url}/${item.id}`, item)
      .pipe(map((resp) => console.log(resp)));
  }
  create(item: Post) {
    return this.http.post<Post>(this.url, item);
  }
}
