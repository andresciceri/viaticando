import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TravelDetailService } from '../travel-detail/travel-detail.service';
import { TravelEditService } from './travel-edit.service';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { StatusListService } from '../status-list/status-list.service';
import { AlertService } from '../alert/alert.service';

import {Trip} from '../travel-create/trip';
import {Employee} from '../employee-list/employee';
import {Status} from '../status-create/status';

@Component({
  selector: 'app-travel-edit',
  templateUrl: './travel-edit.component.html',
  styleUrls: ['./travel-edit.component.css']
})
export class TravelEditComponent implements OnInit {

	private trip : Trip;
	private employee : Employee;
	private status: Status;
	private statuses: Status[];
	private employees : Employee[];
  	private filteredUser: Employee[];

  constructor(private travelDetailService: TravelDetailService, private route: ActivatedRoute, 
  	private employeeListService: EmployeeListService, private statusListService: StatusListService,
      private alertService: AlertService, private router: Router, private travelEditService: TravelEditService) { 
  	this.trip = new Trip();        
  	this.employee = new Employee();
    this.employees = [];
    this.statuses = [];
  }

  ngOnInit() {
  	this.employeeListService.getEmployees()
      .then(employees => {
          this.employees = employees;
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

  	this.statusListService.getStatusList()
      .then(statuses => {
          this.statuses = statuses;
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

  	this.route.paramMap
    .switchMap((params: ParamMap) => this.travelDetailService.getTravel(+params.get('id')))
    .subscribe((trip: Trip) => {
       	this.trip = trip;      	
       	this.trip.startDate = new Date(this.trip.startDate);
       	this.trip.endDate = new Date(this.trip.endDate);
        this.employeeListService.getEmployee(trip.employeeId)
        .then(employee => {
          this.employee = employee;          
        });        
    });
  }

  filterUserList (event) {
    let query = event.query;
    this.filteredUser = this.filterUser(query, this.employees);
  }

  filterUser (query, users: Employee[]) : Employee[] {
    let filtered : any[] = [];
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
        if((user.firstName.toLowerCase().indexOf(query.toLowerCase()) == 0) || (user.lastName.toLowerCase().indexOf(query.toLowerCase()) == 0)) {
            filtered.push(user);
        }
    }
    return filtered;
  }

  private onEditTravel(): void {            
    this.trip.employeeId = this.employee.userId;    

    this.travelEditService.putTravel(this.trip)
    .then(trip => {      
      let msg = "El viaje se editó exitosamente.";
      let link = {path: '/travel-list'};
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
        this.alertService.error(msg);
      }
    });
    
  }

}
