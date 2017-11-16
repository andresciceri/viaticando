import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import {Employee} from '../employee-list/employee';
import {Organization} from '../employee-list/organization';

@Injectable()
export class EmployeeCreateService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private employeeUrl = apipaths.urlApi + 'Users';  // URL to web ap
	private organizationUrl = apipaths.urlApi + 'Organizations';  // URL to web ap

  constructor(private http: Http) { }

  getOrganizations() : Promise<Organization[]> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.organizationUrl}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Organization[])
               .catch(this.handleError);
  }

  postEmployee (user : Employee) : Promise<Employee>{
    let options = new RequestOptions({ headers : this.headers});
    let body = JSON.stringify(user);
    return this.http.post(this.employeeUrl,body, options)
              .toPromise()
              .then(res => res.json() as Employee)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
