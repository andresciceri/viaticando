import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import {Trip} from './trip';

@Injectable()
export class TravelService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private travelUrl = apipaths.urlApi + 'Trips';  // URL to web ap	

  constructor(private http: Http) { }

  postTravel (trip : Trip) : Promise<Trip>{
    let options = new RequestOptions({ headers : this.headers});
    let body = JSON.stringify(trip);
    return this.http.post(this.travelUrl,body, options)
              .toPromise()
              .then(res => res.json() as Trip)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}