import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/shared/post/post.model";

@Component({
  selector: "app-post-search",
  templateUrl: "./post-search.component.html",
  styleUrls: ["./post-search.component.scss"],
})
export class PostSearchComponent implements OnInit {
  query: string = "";
  @Output() searchcriteria = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  searchThis() {
    this.searchcriteria.emit(this.query);
  }
}
