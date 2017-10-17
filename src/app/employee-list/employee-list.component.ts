import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeListService } from './employee-list.service';
import { AlertService } from '../alert/alert.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	private employees : Employee[];

  constructor(private employeeListService: EmployeeListService, private alertService: AlertService,
  	private route: ActivatedRoute, private router: Router) { 
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

}
