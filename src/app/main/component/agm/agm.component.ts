import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lat: number = 51.678418;
  lng: number = 7.809007;
}
