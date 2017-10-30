import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import {Trip} from '../travel-create/trip';

@Injectable()
export class TravelDetailService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private travelUrl = apipaths.urlApi + 'Trips';  // URL to web ap	  

  constructor(private http: Http) { }

  getTravel(id : number) : Promise<Trip> {  	
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.travelUrl}/${id}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Trip)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
