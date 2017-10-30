import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StatusListService } from './status-list.service';
import { AlertService } from '../alert/alert.service';
import { Status } from '../status-create/status';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

	private status: Status[];

  constructor(private statusListService: StatusListService, private alertService: AlertService,
  	private route: ActivatedRoute, private router: Router) { 
  	this.status = [];
  }

  ngOnInit() {
  	this.statusListService.getStatusList()
      .then(status => {
          this.status = status;
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
