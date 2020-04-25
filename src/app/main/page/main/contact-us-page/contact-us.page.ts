import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SocialLink } from '../../../../model/social-link';
import { User } from '../../../../model/user';



@Component({
  selector: 'contact-us-page',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss']
})

export class ContactUsPage implements OnInit {
  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

  user: User;
  socialLinks: SocialLink[] = [
    {
      text: 'اینستاگرام',
      icon: '/assets/images/icon/insta.png',
      linkTo: ''
    },
    {
      text: 'تلگرام',
      icon: '/assets/images/icon/telegram.png',
      linkTo: ''
    },
    {
      text: 'توئیتر',
      icon: '/assets/images/icon/twitt.png',
      linkTo: ''
    },
    {
      text:'فیسبوک',
      icon:'/assets/images/icon/facebook.png',
      linkTo:''
    },
    {
      text:'لینکدین',
      icon:'/assets/images/icon/in.png',
      linkTo:''
    },
  ];

  onSUbmit(form) {

  }
}
