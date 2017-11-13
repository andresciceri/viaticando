import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StatusEditService } from './status-edit.service';
import { AlertService } from '../alert/alert.service';

import {Status} from '../status-create/status';

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {

	private status : Status;

  constructor(private alertService: AlertService, private statusEditService: StatusEditService, 
  	private route: ActivatedRoute) { 
  	this.status = new Status();
  }

  ngOnInit() {
  	this.route.paramMap
    .switchMap((params: ParamMap) => this.statusEditService.getStatus(+params.get('id')))
    .subscribe((status: Status) => {
       	this.status = status;       	       
    });
  }

  private onEditStatus(): void {
        
    this.statusEditService.putStatus(this.status)
    .then(status => {      
      let msg = "El estado se editó exitosamente.";
      let link = {path: '/status-list'};
      this.alertService.success(msg, link);
    },
    error => {     
      let msg_j = error;
      let msg = "";
      if(msg_j.type == 3 && msg_j.url == null){
        msg = "Se ha encontrado un problema al conectar con el servidor";
        this.alertService.error(msg);
      }else if(msg_j.type == 2 && msg_j.url != "") {
        msg = "Se ha encontrado un problema al conectar con el servidor";
        this.alertService.warning(msg);
      }
    });
    
  }

}
