import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SocialLink } from '../../../model/social-link';
import { fadeAnimation } from '../../../animation';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";

@Component({
  selector: "main",
  templateUrl: "./main.html",
  styleUrls: ["./main.scss"],
  animations: [fadeAnimation]
})
export class Main implements OnInit {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {}
  @ViewChild("searchInput") searchInput: ElementRef;
  showSearch: boolean = false;
  searchTerm: string = "";
  pageScrolled: boolean = false;
  socialLinks: SocialLink[] = [
    {
      text: "اینستاگرام",
      icon: "/assets/images/icon/insta.png",
      linkTo: ""
    },
    {
      text: "تلگرام",
      icon: "/assets/images/icon/telegram.png",
      linkTo: ""
    },
    {
      text: "توئیتر",
      icon: "/assets/images/icon/twitt.png",
      linkTo: ""
    },
    {
      text: "فیسبوک",
      icon: "/assets/images/icon/facebook.png",
      linkTo: ""
    },
    {
      text: "لینکدین",
      icon: "/assets/images/icon/in.png",
      linkTo: ""
    }
  ];
  showGoTop: boolean = false;
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  onSearch(term) {
    this.router.navigate(["/tours"], { queryParams: { term: term } });
  }

  onGoTop(top) {
    top.scrollIntoView({ behavior: "smooth" });
  }

  onScroll(event) {
    if (event.target.scrollTop > 40) this.pageScrolled = true;
    else this.pageScrolled = false;

    if (event.target.scrollTop > 300) this.showGoTop = true;
    else this.showGoTop = false;
  }
  onActivate(event: any, top) {
    setTimeout(() => {
      this.onGoTop(top);
    }, 100);
    if (isPlatformBrowser(this.platformId)) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50);
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
