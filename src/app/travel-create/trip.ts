import {Expense} from "./expense";
import {Status} from '../status-create/status';
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
	employeeId: number;
	statusId: number;
  	
	constructor (){		
	}
}