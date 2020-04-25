import { Component, OnInit } from '@angular/core';

import { SocialLink } from './../../../model/social-link';

@Component({
  selector: 'footer-area',
  templateUrl: './footer-area.component.html',
  styleUrls: ['./footer-area.component.scss']
})
export class FooterAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contries = ['آلمان', 'ایتالیا', 'فرانسه', 'اسپانیا', 'هلند'];
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
      text: 'فیسبوک',
      icon: '/assets/images/icon/facebook.png',
      linkTo: ''
    },
    {
      text: 'لینکدین',
      icon: '/assets/images/icon/in.png',
      linkTo: ''
    },
  ]
}
