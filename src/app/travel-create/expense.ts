import {Category} from "./category";

export class Expense {
	id : number;
	nit : string;
	category : Category;
	date: Date;
	description : string;
	value : number;
	
	constructor (){}
}