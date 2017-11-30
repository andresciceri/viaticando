import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { TravelListService } from '../travel-list/travel-list.service';
import { Employee } from '../employee-list/employee';
import {Trip} from '../travel-create/trip';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    private employees : Employee[];
    private travels : Trip[];

    tripsUser : any[];
    labelsUser : string[];
    dataUser: number[];
    dataStatus = [0, 0, 0, 0];
    dataTrips = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	

  constructor(private employeeListService: EmployeeListService, private travelListService: TravelListService) {
      this.employees = [];
      this.travels = [];
      this.tripsUser = [];
      this.labelsUser = [];
      this.dataUser = [];
   }

  ngOnInit() {

      this.employeeListService.getEmployees()
          .then(employees => {
              this.employees = employees;
              this.employees.map(this.getTripsUser, this);
          });

      this.travelListService.getTravels()
      .then(travels => {
          travels.map(this.tripGroupByMonth, this);
          for (var i = 0; i < travels.length; ++i) {
            // code...
            if(travels[i].statusId === 1){
              this.dataStatus[0]++;
            }else if(travels[i].statusId === 2){
              this.dataStatus[1]++;
            }else if(travels[i].statusId === 3){
              this.dataStatus[2]++;
            }else if(travels[i].statusId === 4){
              this.dataStatus[3]++;
            }

          }          
      });  	
  }

  getTripsUser (user : Employee) : Trip[]{      
      this.travelListService.getTravelsByUser(user.userId)
          .then(trips => {
              this.labelsUser.push(user.firstName);
              let total = trips.length;
              this.dataUser.push(total);             
                            
          });
      return [];
  }

  tripGroupByMonth (trip) {    
    let d = new Date(trip.startDate);
    let m = d.getMonth();
    this.dataTrips[m]++;
  }

}
