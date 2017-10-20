import {Expense} from "./expense";
import {Status} from "./status";
import {User} from "../login/user";

export class Trip {
	id : number;
  	expenses : Expense[];
	budget : number;
	startDate : Date;
	endDate : Date;
	destiny : string;
	description : string;
	status : Status;
	employee: User;
  	
	constructor (){
		this.status = {id: 1, name: "Estado 1"};
	}
}