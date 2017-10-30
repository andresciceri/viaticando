import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import { Status } from '../status-create/status';

@Injectable()
export class StatusListService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private statusUrl = apipaths.urlApi + 'TripStatuses';  // URL to web ap	

  constructor(private http: Http) { }

  getStatusList() : Promise<Status[]> {
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.statusUrl}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Status[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
