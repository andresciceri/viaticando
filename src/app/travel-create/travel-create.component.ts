import { Component, OnInit } from '@angular/core';
import {Trip} from './trip';
import { TravelService } from './travel.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.css']
})
export class TravelCreateComponent implements OnInit {

	private trip : Trip;
  constructor(private travelService: TravelService, private alertService: AlertService) { 
  	this.trip = new Trip();
  }

  ngOnInit() {
  }

  private onCreateProduct(): void {
        
    console.log(this.trip);
    this.travelService.postTravel(this.trip)
    .then(trip => {
      console.log(trip);
      let msg = "El viaje se creó exitosamente.";
      let link = {path: '/detail-travel', param: trip.id};
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
