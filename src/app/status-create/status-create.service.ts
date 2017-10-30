import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import {Status} from './status';

@Injectable()
export class StatusCreateService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private statusUrl = apipaths.urlApi + 'TripStatuses';  // URL to web ap	

  constructor(private http: Http) { }

  postStatus (status : Status) : Promise<Status>{
    let options = new RequestOptions({ headers : this.headers});
    let body = JSON.stringify(status);
    return this.http.post(this.statusUrl,body, options)
              .toPromise()
              .then(res => res.json() as Status)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
