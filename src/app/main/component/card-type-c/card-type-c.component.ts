import { Component, OnInit, Input } from '@angular/core';

import { Tour } from './../../../model/tour';

@Component({
  selector: 'card-type-c',
  templateUrl: './card-type-c.component.html',
  styleUrls: ['./card-type-c.component.scss']
})
export class CardTypeCComponent implements OnInit {

  constructor() { }
  @Input() tour: Tour;
  title: string = '';
  subtitle: string = '';
  img: string = '';
  ngOnInit() {
    for (let i = 0; i < this.tour.destinationCountries.length; i++) {
      this.title += this.tour.destinationCountries[i];
      if (i < this.tour.destinationCountries.length - 1)
        this.title += ' - ';
    }
    

    this.title = this.title;
    for (let i = 0; i < this.tour.destinationCities.length; i++) {
      this.subtitle += this.tour.destinationCities[i].nights + ' شب ' + this.tour.destinationCities[i].city;
      if (i < this.tour.destinationCities.length - 1)
        this.subtitle += ' + ';
    }
    this.subtitle = '( ' + this.subtitle + ' ) ';
    this.img = "url('../../../../../" + this.tour.img + "')"
  }
}
