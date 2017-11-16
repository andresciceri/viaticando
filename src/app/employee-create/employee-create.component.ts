import { Component, OnInit } from '@angular/core';

import { EmployeeCreateService } from './employee-create.service';
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';

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
  private username: string;
  private pwd: string;

  constructor(private employeeService: EmployeeCreateService, private alertService: AlertService,
    private authService: AuthService) { 
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

    let auth0 = this.authService.getAuth0();
    const self = this;
    auth0.signup({
      connection: 'Username-Password-Authentication',
      email: this.employee.email,      
      password: this.pwd,
      username: this.username
    }, function (err, response) {
        if (err){
          self.alertService.error(err);
        };
        
        self.employee.authUserId = response.Id;        
        self.employeeService.postEmployee(self.employee)
        .then(employee => {      
          let msg = "El empleado se creó exitosamente.";
          let link = {path: '/employee-list'};
          self.alertService.success(msg, link);
        },
        error => {     
          let msg_j = error;
          let msg = "";
          if(msg_j.type == 3 && msg_j.url == null){
            msg = "Se ha encontrado un problema al conectar con el servidor";
            self.alertService.error(msg);
          }else if(msg_j.type == 2 && msg_j.url != "") {
            msg = "Se ha encontrado un problema al conectar con el servidor";
            self.alertService.error(msg);
          }
        });   
    });
  }

}
