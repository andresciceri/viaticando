import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import {Category} from './category';

@Injectable()
export class CategoryCreateService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private categoryUrl = apipaths.urlApi + 'Categories';  // URL to web ap	
  private token = "hg4TU4TzZedCRjaGs9akcopD14AzgC03";

  constructor(private http: Http) { }

  postCategory (category : Category) : Promise<Category>{
    this.headers.append('Authorization', this.token);
    let options = new RequestOptions({ headers : this.headers});
    let body = JSON.stringify(category);
    return this.http.post(this.categoryUrl,body, options)
              .toPromise()
              .then(res => res.json() as Category)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
