import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "../shared/post/user.model";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(this.url).pipe(map((users) => users));
  }
  getUser(id) {
    return this.http.get<User>(`${this.url}/${id}`).pipe(map((user) => user));
  }
}
