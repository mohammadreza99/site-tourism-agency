import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'about-us-page',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss']
})
export class AboutUsPage implements OnInit {
  constructor(private title: Title, private route: ActivatedRoute,private dataService: DataService) { }
  country:any
  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
