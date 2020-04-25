import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../../model/post';
import { PostService } from '../../../post.service';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  @Input() post: Post;
  @Input() reverse: boolean;
  
  get day() {
    return this.postService.getDay(this.post.date)
  }

  get month() {
    return this.postService.getMonth(this.post.date)
  }

  get country() {
    return this.postService.getCountry(this.post.country)
  }
}
