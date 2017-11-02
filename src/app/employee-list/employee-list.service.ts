import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import { Employee } from './employee';

@Injectable()
export class EmployeeListService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private employeesUrl = apipaths.urlApi + 'Users';  // URL to web ap	

  constructor(private http: Http) { }

  getEmployees() : Promise<Employee[]> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.employeesUrl}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Employee[])
               .catch(this.handleError);
  }

  getEmployee(id: number) : Promise<Employee> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Employee)
               .catch(this.handleError);
  }  

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
