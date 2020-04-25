import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'madarek-details-page',
  templateUrl: './madarek-details.page.html',
  styleUrls: ['./madarek-details.page.scss']
})
export class MadarekDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  country:any
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.country=this.dataService.getCountry(params['country'])
    });
  }
}
