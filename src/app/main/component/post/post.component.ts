import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../model/post';
import { PostService } from '../../../post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }
  ngOnInit() {

  }

  @Input() post: Post;

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
