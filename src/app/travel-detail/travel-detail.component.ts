import { Component, OnInit } from '@angular/core';
import {Trip} from '../travel-create/trip';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {

	private trip : Trip;
	
  constructor() { }

  ngOnInit() {
  }

}
