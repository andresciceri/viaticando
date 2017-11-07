import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import {Trip} from '../travel-create/trip';
import {Expense} from '../travel-create/expense';
import {Category} from "../travel-create/category";

@Injectable()
export class TravelDetailService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private travelUrl = apipaths.urlApi + 'Trips';  // URL to web ap	  
  private expensesUrl = apipaths.urlApi + 'Expenses';  // URL to web ap
  private categoryUrl = apipaths.urlApi + 'Categories';  // URL to web ap

  constructor(private http: Http) { }

  getTravel(id : number) : Promise<Trip> {  	
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.travelUrl}/${id}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Trip)
               .catch(this.handleError);
  }

  getExpense(id: number) : Promise<Expense> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.expensesUrl}/${id}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Expense)
               .catch(this.handleError); 
  }

  getCategory(id: number) : Promise<Category> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.categoryUrl}/${id}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Category)
               .catch(this.handleError); 
  }

  putExpense(obj: Expense) : Promise<Expense> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.expensesUrl}/${obj.expenseId}`;
    let body = JSON.stringify(obj);
    return this.http
      .put(url, body, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Expense)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
