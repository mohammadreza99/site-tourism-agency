import { Component, OnInit, Output, EventEmitter, Input, DoCheck, HostListener, OnChanges, ViewChild, ElementRef } from '@angular/core';


import { SocialLink } from '../../../model/social-link';
import { DataService } from '../../../data.service';
import { Tour } from '../../../model/tour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, DoCheck, OnChanges {
  scrolled: boolean = false;

  ngDoCheck(): void {
    if (window.location.href.includes('/tours/details')) {
      this.isDetailsPage = true;
    }
    else {
      this.isDetailsPage = false;
    }
  }

  ngOnChanges() {
    this.scrolled = this.pageScrolled;
  }

  constructor(private dataService: DataService, private router: Router) { }
  isDetailsPage: boolean
  contries = ['آلمان', 'ایتالیا', 'فرانسه', 'اسپانیا', 'هلند'];
  runningTours: Tour[] = [];
  runningToursTitle = [];
  categoryTours = [];
  term: string = '';
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
  searchOpened: boolean = false;

  @ViewChild('search') search: ElementRef;
  @ViewChild('header') header: ElementRef;
  @ViewChild('searchToggle') searchToggle: ElementRef;
  @Output() sidenavToggle = new EventEmitter<any>();
  @Output() itemClicked = new EventEmitter<any>();
  @Output() searchClicked = new EventEmitter<any>();
  @Input() pageScrolled: boolean;
  @Input() sidenav: boolean;

  onSearch(term) {
    if (term != undefined && term != '') {
      this.term = '';
      this.searchClicked.emit(term);
    }
  }

  openSearchBar(event) {
    this.header.nativeElement.classList.toggle('show');
    this.searchToggle.nativeElement.classList.toggle('active');
    if (this.header.nativeElement.classList.contains('show')) {
      this.searchOpened = true;
      this.search.nativeElement.focus();
    }
    else {
      this.searchOpened = false;
      this.search.nativeElement.value = '';
      this.search.nativeElement.blur();
    }
    event.preventDefault();
  }

  ngOnInit() {
    this.categoryTours = this.dataService.categories;
    for (let i = 0; i < this.dataService.runningTours.length; i++) {
      this.runningTours[i] = this.dataService.getTour(this.dataService.runningTours[i])
      let title = ''
      for (let j = 0; j < this.runningTours[i].destinationCountries.length; j++) {
        title += this.runningTours[i].destinationCountries[j];
        if (j < this.runningTours[i].destinationCountries.length - 1)
          title += ' - ';
      }
      title = 'تور ' + this.runningTours[i].days + ' روزه' + ' ( ' + title + ' ) ';
      this.runningToursTitle[i] = title
    }
  }

}
