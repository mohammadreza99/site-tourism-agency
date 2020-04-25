import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { DataService } from '../../../../data.service';
import { PostService } from '../../../../post.service';
import { Tour } from '../../../../model/tour';
import { Post } from '../../../../model/post';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private dataService: DataService,
    public postService: PostService,
  ) { }

  userEmail = new FormControl('', [Validators.email, Validators.required]);
  carouselItems: Array<any> =
    [

      {
        title: 'تعطیلات و تفریحاتی شگفت انگیز',
        subTitle: 'با ما همراه باشید ... ما مژده سفری خاطره انگیز را به شما میدهیم',
        img: "url('../../../../../assets/images/bg/42.jpg')"
      },
      {
        title: 'تعطیلات و تفریحاتی شگفت انگیز',
        subTitle: 'با ما همراه باشید ... ما مژده سفری خاطره انگیز را به شما میدهیم',
        img: "url('../../../../../assets/images/bg/43.jpg')"
      },
      {
        title: 'تعطیلات و تفریحاتی شگفت انگیز',
        subTitle: 'با ما همراه باشید ... ما مژده سفری خاطره انگیز را به شما میدهیم',
        img: "url('../../../../../assets/images/bg/41.jpg')"
      },
      {
        title: 'تعطیلات و تفریحاتی شگفت انگیز',
        subTitle: 'با ما همراه باشید ... ما مژده سفری خاطره انگیز را به شما میدهیم',
        img: "url('../../../../../assets/images/bg/15.jpg')"
      },
      {
        title: 'سفری لذت بخش',
        subTitle: 'سفر کردن، فقط تماشا کردن و عکس گرفتن نیست، سفر تغییراتی در شما ایجاد می‌کند که در روح شما می‌ماند ',
        img: "url('../../../../../assets/images/bg/44.jpg')"
      },
      {
        title: 'ارائه مناسب ترین قیمت',
        subTitle: 'در کاریز می توانید با بهترین و کمترین نرخ تور مورد نظر خود را انتخاب کنید',
        img: "url('../../../../../assets/images/bg/5.jpg')"
      },
      {
        title: 'مشتری مداری',
        subTitle: 'آسایش و رضایت مسافران مهم ترین رسالت ماست ',
        img: "url('../../../../../assets/images/bg/36.jpg')"
      },
      {
        title: 'مجری تورهای نمایشگاهی',
        subTitle: 'برگزار کننده کلیه تورهای تخصصی معتبر اروپا',
        img: "url('../../../../../assets/images/bg/17.jpg')"
      },
      {
        title: 'خدمات لوكس و درجه يك',
        subTitle: 'استفاده از بهترين كارگزاران،هتل ها و خدمات گردشگری',
        img: "url('../../../../../assets/images/bg/28.jpg')"
      },
      {
        title: 'در طول سفر چه چیزی منتظر شماست',
        subTitle: 'آنچه همه نمی دانند را در سفرنامه ها و تجربیات سفر دیگران دنبال کنید',
        img: "url('../../../../../assets/images/bg/45.jpg')"
      },
      {
        title: 'اطلاع کامل از مدارک لازم',
        subTitle: 'سفری با اطمینان خاطر و اگاهی کافی را با ارائه  قوانین و مدارک مورد نیاز مقصد را برای شما دار یم',
        img: "url('../../../../../assets/images/bg/33.jpg')"
      },
    ];
  registrationSuccess: boolean = false;
  topSales: Tour[] = [];
  noruzTours: Tour[] = [];
  posts: Post[] = [];
  touristyToursCount = 0;
  namayeshgahiToursCount = 0;
  norouziToursCount = 0;
  headerCarousel: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 1000,
    load: this.carouselItems.length,
    loop: true,
    point: {
      visible: true
    },
    interval: {
      timing: 4000,
      initialDelay: 1000,
    },
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  customer: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
    speed: 600,
    slide: 1,
    load: 5,
    loop: true,
    point: {
      visible: true
    },
    interval: {
      timing: 4000,
      initialDelay: 1000,
    },
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.noruzTours = this.dataService.getNoruzTours();
    for (const tour of this.dataService.topSales)
      this.topSales.push(this.dataService.getTour(tour))
    this.posts = this.postService.getPosts();
    for (const tour of this.dataService.tours) {
      if (tour.category == '1')
        this.touristyToursCount++;
      if (tour.category == '2')
        this.namayeshgahiToursCount++;
      if (tour.noruzi)
        this.norouziToursCount++;
    }
  }

  onRegister() {
    if (this.userEmail.valid)
      this.registrationSuccess = true;
  }
}