import { Component, OnInit } from '@angular/core';

import { TravelService } from './travel.service';
import { AlertService } from '../alert/alert.service';
import { EmployeeListService } from '../employee-list/employee-list.service';

import {Trip} from './trip';
import {Employee} from '../employee-list/employee';

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.css']
})
export class TravelCreateComponent implements OnInit {

	private trip : Trip;
  private employees : Employee[];
  private filteredUser: Employee[];

  constructor(private travelService: TravelService, private alertService: AlertService,
    private employeeListService: EmployeeListService) { 
  	this.trip = new Trip();
    this.employees = [];
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
  }

  private onCreateTravel(): void {
        
    this.travelService.postTravel(this.trip)
    .then(trip => {      
      let msg = "El viaje se creó exitosamente.";
      let link = {path: '/travel-detail', param: trip.tripId};
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

  handleDropdownClickUser() {
      this.filteredUser = [];
      
      //mimic remote call
      setTimeout(() => {
          this.filteredUser = this.employees;
      }, 100)
  }

}
