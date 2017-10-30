import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { StatusCreateService } from './status-create.service';

import {Status} from './status';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {

	private status : Status;
  
  constructor(private alertService: AlertService, private statusService: StatusCreateService) { 
  	this.status = new Status();
  }

  ngOnInit() {
  }

  private onCreateStatus(): void {
        
    this.statusService.postStatus(this.status)
    .then(status => {      
      let msg = "El estado se creó exitosamente.";
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
