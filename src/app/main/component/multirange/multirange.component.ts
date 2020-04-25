import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'multirange',
  templateUrl: './multirange.component.html',
  styleUrls: ['./multirange.component.scss']
})
export class MultirangeComponent implements OnInit {

  constructor() { }
  @Input() selectedMin;
  @Input() selectedMax;
  @Input() step=1;
  @Input() min;
  @Input() max;
  @Output() selectedMinChange = new EventEmitter();
  @Output() selectedMaxChange = new EventEmitter();


  @ViewChild('range1') range1: ElementRef;
  @ViewChild('range2') range2: ElementRef;

  ngOnInit() {
    this.selectedMax = this.max - this.selectedMax;
  }

  ngAfterViewInit() {
    this.range1.nativeElement.value = this.selectedMin
    this.range2.nativeElement.value = this.max - this.selectedMax
  }

  fit(left, right) {
    if (left - right > 0)
      return -(Math.floor((left - right) * 3 / 100) + 1)
    else
      return Math.floor((right - left) * 2 / 100)
  }

  minChange(e) {
    e.target.value = Math.min(e.target.value, e.target.parentNode.childNodes[2].value - 1);
    var value = (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.min);
    var children = e.target.parentNode.childNodes[0].childNodes;
    children[0].setAttribute('style', 'width:' + value + '%'); //invers-left
    children[2].setAttribute('style', 'left:' + value + '%;right:' + 100 * (this.selectedMax) / (this.max - this.min) + '%;background-color:#ffa900'); //range
    children[3].setAttribute('style', 'left:' + (value + this.fit(value, 100 - value)) + '%'); //thumb1
    this.selectedMin = (value / 100) * (this.max - this.min) + this.min;
    this.selectedMinChange.emit(this.selectedMin);
  }

  maxChange(e) {
    e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[1].value - (-1));
    var value = (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.min);
    var children = e.target.parentNode.childNodes[0].childNodes;
    children[1].setAttribute('style', 'width:' + (100 - value) + '%'); //invers-left
    children[2].setAttribute('style', 'right:' + (100 - value) + '%;left:' + (this.selectedMin - this.min) / (this.max - this.min) * 100 + '%;background-color:#ffa900');  //range
    children[4].setAttribute('style', 'left:' + (value + this.fit(value, 100 - value)) + '%'); //thumb2
    this.selectedMax = this.max - ((value * (this.max - this.min) / 100) + this.min);
    this.selectedMaxChange.emit(this.max - this.selectedMax);
  }
}
