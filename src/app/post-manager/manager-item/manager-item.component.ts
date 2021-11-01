import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/shared/post/post.model';


@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.scss']
})
export class ManagerItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Output() deleteItem = new EventEmitter();


  constructor() {}

  ngOnInit(): void {

  }

  delete(index:number, id: number){
    this.deleteItem.emit({index, id});
  }

}
