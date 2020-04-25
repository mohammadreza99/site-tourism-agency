import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
    this.height = this.height + 'px';
  }
  ngOnChanges() {
    this.background = 'url(' + this.background + ')';
  }
  @Input() title: string;
  @Input() notBlur: boolean = false;
  @Input() subtitle: string;
  @Input() height: string = '450';
  @Input() background: string;
  @Input() animate: boolean;
  @Input() forSearchPage: boolean;
}
