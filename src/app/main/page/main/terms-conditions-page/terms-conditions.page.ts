import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'terms-conditions-page',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss']
})
export class TermsConditionsPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
} 
