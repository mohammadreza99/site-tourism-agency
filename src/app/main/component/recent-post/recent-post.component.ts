import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../model/post';
import { PostService } from '../../../post.service';

@Component({
  selector: 'recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  @Input() recentPost: Post;
  ngOnInit() {
  }
  get day() {
    return this.postService.getDay(this.recentPost.date)
  }

  get month() {
    return this.postService.getMonth(this.recentPost.date)
  }

  get country() {
    return this.postService.getCountry(this.recentPost.country)
  }
}
