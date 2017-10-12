import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TravelListService } from './travel-list.service';
import { AlertService } from '../alert/alert.service';
import {Trip} from '../travel-create/trip';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

	private travels : Trip[];

  constructor(private travelListService: TravelListService, private alertService: AlertService,
  	private route: ActivatedRoute, private router: Router) { 
  	this.travels = [];
  }

  ngOnInit() {
  	this.travelListService.getTravels()
      .then(travels => {
          this.travels = travels;
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

  onRowSelect(event) {
    this.router.navigate(['/detail-travel', event.data.id]);
  }

}
