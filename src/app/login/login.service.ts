import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { apipaths } from '../app.apis';

import {User} from './user';
import {Token} from './token';
import {Employee} from '../employee-list/employee';

@Injectable()
export class LoginService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private loggedIn = false;
	private user : User;
	private token: Token;
	private tokenUrl = apipaths.urlApi + 'api-token-auth/';  // URL to web ap
  	private profileUserUrl = apipaths.urlApi + 'users/current_user/';  // URL to web api
  	private userUrl = apipaths.urlApi + 'Users';  // URL to web api

  constructor(private http: Http) { 
  	this.loggedIn = !!sessionStorage.getItem('viaticandoToken');
    let tokenUser = new Token();
    if(sessionStorage.getItem('viaticandoToken')){
      tokenUser = JSON.parse(sessionStorage.getItem('viaticandoToken'));
      this.headers.append('Authorization', "Token " + tokenUser.token);
    }
  }

  login(username : string, pass : string) : Promise<Token>{
    let options = new RequestOptions({ headers : this.headers});
    let body = JSON.stringify({'username': username, 'password': pass});
    
    return this.http.post(this.tokenUrl,body, options)
              .toPromise()
              .then(res => 
              	{
              		this.token = res.json();
	                if (this.token && this.token.token) {
	                    // store user details and jwt token in local storage to keep user logged in between page refreshes
	                    sessionStorage.setItem('lemurUserToken', JSON.stringify(this.token));
                      this.headers.append('Authorization', "Token " + this.token.token);
	                    return this.token;
	                }
              		
              	})
              .catch(this.handleError);
              
  }

  profile(id: string) : Promise<Employee> {    
    let options = new RequestOptions({ headers : this.headers});
    const url = `${this.userUrl}/authid/${id}`;
    return this.http.get(url,options)
               .toPromise()
               .then(response => response.json() as Employee)
               .catch(this.handleError);
  }

  logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('viaticandoToken');
        this.loggedIn = false;
    }

   private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
