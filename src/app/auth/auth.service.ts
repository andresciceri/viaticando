import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-vars';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

	auth0 = new auth0.WebAuth({
		clientID: AUTH_CONFIG.clientID,
		domain: AUTH_CONFIG.domain,
		responseType: 'token id_token',
		audience: AUTH_CONFIG.apiUrl,
		redirectUri: AUTH_CONFIG.callbackURL,
		scope: 'openid profile '
	});
  //read:users create:users update:users delete:users

  userProfile: any;

  constructor(public router: Router) { }

  public login(email: string, pwd: string): void {    

    const self = this;

    this.auth0.client.login({
              realm: 'Username-Password-Authentication',
              username: email,
              password: pwd,
              scope: 'openid profile',
              audience: AUTH_CONFIG.apiUrl
            }, function(err, authResult) {
                if (authResult && authResult.accessToken && authResult.idToken) {
                  window.location.hash = '';
                  self.setSession(authResult);
                  self.router.navigate(['/main']);
                } else if (err) {
                  self.router.navigate(['/main']);
                  console.log(err);
                  alert(`Error: ${err.error}. Check the console for further details.`);
                }              
            });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/main']);
      } else if (err) {
        this.router.navigate(['/main']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }  

  public getAuth0 () : any{
    return this.auth0;
  }




}
