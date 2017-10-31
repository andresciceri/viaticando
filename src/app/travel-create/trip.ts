import {Expense} from "./expense";
import {Status} from "./status";
import {Employee} from "../employee-list/employee";

export class Trip {
	tripId : number;
  	expenses : Expense[];
	budget : number;
	startDate : Date;
	endDate : Date;
	destiny : string;
	description : string;
	status : Status;
	employee: Employee;
  	
	constructor (){
		this.status = {tripStatusId: 1, name: "Estado 1"};
		this.employee = new Employee();
	}
}