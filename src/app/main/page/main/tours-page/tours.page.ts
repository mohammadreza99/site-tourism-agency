import { Component, OnInit, ViewChild, HostBinding, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { DataService } from '../../../../data.service';
import { Tour } from '../../../../model/tour';
import { ActivatedRoute } from '@angular/router';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'tours-page',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss']
})
export class ToursPage implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  tours: Tour[] = [];
  currentTours: Tour[] = [];
  title: string = '';
  bg: string = '';
  forSearchPage: boolean;
  tourClasses: string[] = [];
  filterObject = {
    priceMin: 500000,
    priceMax: 57890000,
    daysMin: 1,
    daysMax: 31,
    class: []
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentTours = [];
      this.tours = this.dataService.getTours();
      if (params['id']) {
        for (const tour of this.tours) {
          if (tour.category == params['id'])
            this.currentTours.push(tour)
        }
        if (params['id'] == '1') {
          this.bg = '../../../../../assets/images/bg/tour4.jpg';
          this.title = 'تورهای توریستی';
        }
        if (params['id'] == '2') {
          this.bg = '../../../../../assets/images/bg/tour5.jpg'
          this.title = 'تورهای نمایشگاهی'
        }
        this.forSearchPage = false;
      }
      else if (params['term']) {
        for (const tour of this.tours)
          for (const country of tour.destinationCountries)
            if (country == params['term'])
              this.currentTours.push(tour);
        this.title = params['term'];
        this.forSearchPage = true;
        this.bg = '../../../../../assets/images/bg/tour2.jpg';
      }
      this.tourClasses = this.dataService.getTourClasses()

    });
  }

  filterTours(filterObject) {
  
    let filteredTours = [];
    this.currentTours = [];
    for (const tour of this.tours)
      if (filterObject.class.length!=0) {
        for (const t of filterObject.class)
          if (tour.class == t &&
            tour.adult.tooman <= filterObject.priceMax &&
            tour.adult.tooman >= filterObject.priceMin &&
            tour.days <= filterObject.daysMax &&
            tour.days >= filterObject.daysMin)
            filteredTours.push(tour)
      } else {
        if (
          tour.adult.tooman <= filterObject.priceMax &&
          tour.adult.tooman >= filterObject.priceMin &&
          tour.days <= filterObject.daysMax &&
          tour.days >= filterObject.daysMin)
        

        filteredTours.push(tour)
      }

    this.currentTours = filteredTours;

  }

  onSelectClass(tourClass, event: MatCheckbox) {
    if (event.checked)
      this.filterObject.class.push(tourClass);
    else {
      let i = this.filterObject.class.indexOf(tourClass)
      this.filterObject.class.splice(i, 1);

    }

    this.filterTours(this.filterObject);
  }

  onPriceMinChange(priceMin) {
    this.filterObject.priceMin = priceMin;
    this.filterTours(this.filterObject);
  }

  onPriceMaxChange(priceMax) {
    this.filterObject.priceMax = priceMax;
    this.filterTours(this.filterObject);
  }

  onDaysMinChange(daysMin) {
    this.filterObject.daysMin = daysMin;
    this.filterTours(this.filterObject);
  }

  onDaysMaxChange(daysMax) {
    console.log(daysMax);
    
    this.filterObject.daysMax = daysMax;
    this.filterTours(this.filterObject);
  }

}

