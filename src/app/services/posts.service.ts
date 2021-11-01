import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/post/post.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Post[]>(this.url).pipe(map(posts => posts));
  }
  
  getById(id: string){
    return this.http.get<Post>(`${this.url}/${id}`).pipe(map(post => post));
  }



}
