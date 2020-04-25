import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour, Comment } from '../../../../model/tour';
import { DataService } from '../../../../data.service';
import { LightBoxComponent } from '../../../../main/component';

@Component({
  selector: 'tour-details-page',
  templateUrl: './tour-details.page.html',
  styleUrls: ['./tour-details.page.scss']
})
export class TourDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  @ViewChild(LightBoxComponent) lightBoxCmp: LightBoxComponent;
  tour = new Tour();
  title: string = '';
  subtitle: string = '';
  category: string = '';
  radioModel;
  plansLenght = 4
  liked: boolean = false;
  disliked: boolean = false;
  currentSection;
  
  scroll(el) {
    el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.tour = this.dataService.getTour(params['id']);
      this.category = this.dataService.getCategory(this.tour.category);
      for (let i = 0; i < this.tour.destinationCountries.length; i++) {
        this.title += this.tour.destinationCountries[i];
        if (i < this.tour.destinationCountries.length - 1)
          this.title += ' - ';
      }
      this.title = 'تور ' + this.tour.days + ' روزه' + ' ( ' + this.title + ' ) ';

      for (let i = 0; i < this.tour.destinationCities.length; i++) {
        this.subtitle += this.tour.destinationCities[i].nights + ' شب ' + this.tour.destinationCities[i].city;
        if (i < this.tour.destinationCities.length - 1)
          this.subtitle += ' + ';
      }
      this.subtitle = '( ' + this.subtitle + ' ) ';
    });
  }
  showPlans(plansLenght) {
    if (plansLenght != this.tour.plans.length)
      this.plansLenght = this.tour.plans.length
    else
      this.plansLenght = 4
  }

  openModal(i) {
    this.lightBoxCmp.openModal();
    this.lightBoxCmp.currentSlide(i + 1);
  }

  onLikeComment(comment: Comment) {
    if (!this.liked) {
      if (this.disliked) {
        this.disliked = false;
        comment.dislikes--;
      }
      comment.likes++;
    }
    this.liked = true;
  }

  onDislikeComment(comment: Comment) {
    if (!this.disliked) {
      if (this.liked) {
        this.liked = false;
        comment.likes--;
      }
      comment.dislikes++;
    }
    this.disliked = true;
  }
}
