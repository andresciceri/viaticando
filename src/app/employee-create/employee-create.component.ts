import { Component, OnInit } from '@angular/core';

import { EmployeeCreateService } from './employee-create.service';
import { AlertService } from '../alert/alert.service';

import {Employee} from '../employee-list/employee';
import {Organization} from '../employee-list/organization';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

	private employee: Employee;
	private organization: Organization;
	private organizations: Organization[];

  constructor(private employeeService: EmployeeCreateService, private alertService: AlertService) { 
  	this.employee = new Employee();
  }

  ngOnInit() {
  	this.employeeService.getOrganizations()
	.then(orgs => {
	  this.organizations = orgs;
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

  private onCreateEmployee(): void {    

    this.employeeService.postEmployee(this.employee)
    .then(employee => {      
      let msg = "El empleado se creó exitosamente.";
      let link = {path: '/employee-list'};
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
