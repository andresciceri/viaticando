import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TravelListService } from './travel-list.service';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { StatusListService } from '../status-list/status-list.service';
import { AlertService } from '../alert/alert.service';
import {Trip} from '../travel-create/trip';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

	private travels : Trip[];
  private tripSelected: Trip;
  private displayDialog: boolean;
  private start: Date;
  private end: Date;
  private nameFile: string;

  constructor(private travelListService: TravelListService, private alertService: AlertService,
  	private employeeListService: EmployeeListService, private statusListService: StatusListService, 
      private route: ActivatedRoute, private router: Router) { 
  	this.travels = [];
  }

  ngOnInit() {

    if(this.route.snapshot.paramMap.has('user')){      
      this.route.paramMap
      .switchMap((params: ParamMap) => this.travelListService.getTravelsByUser(+params.get('user')))
      .subscribe((trips: Trip[]) => {
          this.travels = trips;
          for (var i = 0; i < this.travels.length; ++i) {
            // code...
            if(this.travels[i].employeeId){
              this.addEmployee(i,this.travels[i].employeeId);
              this.addStatus(i,this.travels[i].statusId);
            }
          }
      });
    }else {
      this.travelListService.getTravels()
      .then(travels => {
          this.travels = travels;
          for (var i = 0; i < this.travels.length; ++i) {
            // code...
            if(this.travels[i].employeeId){
              this.addEmployee(i,this.travels[i].employeeId);
              this.addStatus(i,this.travels[i].statusId);
            }
          }
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

  addEmployee (key: number, id: number){
    this.employeeListService.getEmployee(id)
      .then(employee => {
        this.travels[key].employee = employee;
      });
  }

  addStatus (key: number, id: number){
    this.statusListService.getStatus(id)
      .then(status => {
        this.travels[key].status = status;
      });
  }

  onRowSelect(event) {    
    this.router.navigate(['/travel-detail', event.data.tripId]);
  }

  showDialogToAdd() {
      this.displayDialog = true;
    }

  downloadFile() {
    let s = new Date(this.start).toISOString();
    let e = new Date(this.end).toISOString();
    
    this.travelListService.getTravelsByDate(s,e)
    .then(file => {
        const csvUrl = (window.URL || window['webkitURL']).createObjectURL(file);
        const anchor = document.createElement('a');
        if(this.nameFile){
          anchor.download = `${this.nameFile}.csv`;
        }else {
          let nf = Date.now();
          anchor.download = `${nf}.csv`;
        }        
        anchor.href = csvUrl;
        anchor.click();        
      });
  }

}
