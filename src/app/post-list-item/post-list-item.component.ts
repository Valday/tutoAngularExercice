import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: Post;

  constructor() { }

  ngOnInit() {
    console.log(this.postItem);
  }

  onLoveIts() {
    this.postItem.loveIts++;
    // console.log('Post : ' + this.postItem.title + ', loveIts value : ' + this.postItem.loveIts);
  }

  onDontLoveIts() {
    this.postItem.loveIts--;
    // console.log('Post : ' + this.postItem.title + ', loveIts value : ' + this.postItem.loveIts);
  }

}
