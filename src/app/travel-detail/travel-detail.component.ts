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
  	private alertService: AlertService, private router: Router) {   
  	this.trip = new Trip();	
  }

  ngOnInit() {
  	this.route.paramMap
    .switchMap((params: ParamMap) => this.travelDetailService.getTravel(+params.get('id')))
    .subscribe((trip: Trip) => {
       	this.trip = trip;    	    			
    });
  }

  onChangeItem(item : any) {
    this.travelDetailService.putExpense(item)
    .then(expense => {      
      let msg = "El gasto fue actualizado.";
      let link = null;
      this.alertService.success(msg, link);
    },
    error => {     
      let msg_j = error;
      let msg = "";
      if(msg_j.type == 3 && msg_j.url == null){
        msg = "Se ha encontrado un problema al conectar con el servidor";
        this.alertService.error(msg);
      }else if(msg_j.type == 2 && msg_j.url != "") {
        msg_j = JSON.parse(error._body);
        msg = msg_j.non_field_errors[0];
        this.alertService.warning(msg);
      }
    });
  }

}
