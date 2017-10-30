import {Category} from "./category";

export class Expense {
	expenseId : number;
	nit : string;
	category : Category;
	date: Date;
	description : string;
	value : number;
	photoURL: string;
	approved: boolean;
	
	constructor (){}
}