import {Category} from "./category";

export class Expense {
	expenseId : number;
	nit : string;
	category : Category;
	categoryId: number;
	date: Date;
	description : string;
	value : number;
	photoURL: string;
	approved: boolean;
	
	constructor (){}
}