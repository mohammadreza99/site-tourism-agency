import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Post } from '../../../../model/post';
import { PostService } from '../../../../post.service';

@Component({
  selector: 'post-detail-page',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss']
})
export class PostDetailPage implements OnInit {

  constructor(router: Router, title: Title, private route: ActivatedRoute, private postService: PostService) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  post: Post;
  recentPosts: Post[] = [];
  country: string;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.post = this.postService.getPost(params['id']);
      this.country = this.postService.getCountry(this.post.country);
    });
    this.recentPosts = this.postService.getRecentPosts();
  }

}
