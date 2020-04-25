import { Component, OnInit, Input } from '@angular/core';

import { Tour } from './../../../model/tour';

@Component({
  selector: 'card-type-b',
  templateUrl: './card-type-b.component.html',
  styleUrls: ['./card-type-b.component.scss']
})
export class CardTypeBComponent implements OnInit {
  constructor() { }
  @Input() tour: Tour;
  ngOnInit() {

  }

  get title() {
    let title: string = "";
    for (let i = 0; i < this.tour.destinationCountries.length; i++) {
      title += this.tour.destinationCountries[i]
      if (i < this.tour.destinationCountries.length - 1)
        title += " - "
    }
    // title = 'تور ' + this.tour.days + ' روزه' + " ( " + title + " ) ";
    return title
  }

  get subtitle() {
    let subtitle: string = "";
    for (let i = 0; i < this.tour.destinationCities.length; i++) {
      subtitle += this.tour.destinationCities[i].nights + ' شب ' + this.tour.destinationCities[i].city;
      if (i < this.tour.destinationCities.length - 1)
        subtitle += " + "
    }
    subtitle = '( ' + subtitle + ' ) ';
    return subtitle;
  }
}
