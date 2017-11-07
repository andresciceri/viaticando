import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TravelDetailService } from './travel-detail.service';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { StatusListService } from '../status-list/status-list.service';
import { AlertService } from '../alert/alert.service';

import {Trip} from '../travel-create/trip';
import {Employee} from '../employee-list/employee';
import {Status} from '../status-create/status';
import {Expense} from '../travel-create/expense';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {

	private trip : Trip;
  private employee : Employee;
  private status: Status;
  private expenses: Expense[];
  private imageUrl: any;
  private isVisible : string;
	
  constructor(private travelDetailService: TravelDetailService, private route: ActivatedRoute, 
  	private employeeListService: EmployeeListService, private statusListService: StatusListService,
      private alertService: AlertService, private router: Router) {   
  	this.trip = new Trip();
    this.expenses = [];
    this.employee = new Employee();
    this.status = new Status();
    this.isVisible = "none";
  }

  ngOnInit() {
  	this.route.paramMap
    .switchMap((params: ParamMap) => this.travelDetailService.getTravel(+params.get('id')))
    .subscribe((trip: Trip) => {
       	this.trip = trip;
        this.employeeListService.getEmployee(trip.employeeId)
        .then(employee => {
          this.employee = employee;
        });
        this.statusListService.getStatus(trip.statusId)
        .then(status => {
          this.status = status;
        });
        for (var i = 0; i < this.trip.expensesIds.length; ++i) {
          this.addExpenses(this.trip.expensesIds[i]);
        }
    });
  }

  addExpenses (idExpense: number) {
    this.travelDetailService.getExpense(idExpense)
    .then(expense => {
      this.travelDetailService.getCategory(expense.categoryId)
      .then(category => {
        expense.category = category;
        this.expenses.push(expense);
      });      
    });
  }  

  onChangeItem(item : Expense) {
    if(item.approved !== null){
      this.travelDetailService.putExpense(item)
      .then(expense => {      
        let msg = "El gasto fue actualizado.";
        let link = null;
        this.alertService.success(msg, link);
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

  closeModal() {
    this.imageUrl = "";
    this.isVisible = "none";
  }

  showModal(url: string) {
    this.isVisible = "block";
    this.imageUrl = url;
  }

}
