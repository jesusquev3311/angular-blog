import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NotificationsService } from "src/app/services/notifications.service";
import { PostComment } from "src/app/shared/post/comment.model";

@Component({
  selector: "app-comments-editor",
  templateUrl: "./comments-editor.component.html",
  styleUrls: ["./comments-editor.component.scss"],
})
export class CommentsEditorComponent implements OnInit {
  @Input() postId: number;
  @Output() addComment = new EventEmitter();
  constructor(private noty: NotificationsService) {}

  ngOnInit(): void {}

  addCommentAction(comment: PostComment) {
    if (comment.name && comment.email && comment.body) {
      this.addComment.emit(comment);
    } else {
      this.noty.error("All form fields are required");
    }
  }
}
