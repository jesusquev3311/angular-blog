import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostComment } from 'src/app/shared/post/comment.model';


@Component({
  selector: 'app-comments-editor',
  templateUrl: './comments-editor.component.html',
  styleUrls: ['./comments-editor.component.scss']
})
export class CommentsEditorComponent implements OnInit {
  @Input() postId: number;
  @Output() addComment = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addCommentAction(comment: PostComment){
    this.addComment.emit(comment);
  }

}
