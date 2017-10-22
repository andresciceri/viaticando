import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TravelDetailService } from './travel-detail.service';
import { AlertService } from '../alert/alert.service';
import {Trip} from '../travel-create/trip';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {

	private trip : Trip;
	
  constructor(private travelDetailService: TravelDetailService, private route: ActivatedRoute, 
  	private router: Router) {   
  	this.trip = new Trip();	
  }

  ngOnInit() {
  	this.route.paramMap
    .switchMap((params: ParamMap) => this.travelDetailService.getTravel(+params.get('id')))
    .subscribe((trip: Trip) => {
       	this.trip = trip;    	    			
    });
  }

}
