import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../alert/alert.service';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	heightDiv: string;
	login = {email: "", password: ""};
	loading = false;
  	returnUrl: string;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private loginService: LoginService,
        private authService: AuthService) { 
  	
  	window.addEventListener("resize", this.sizeWindow);
  	this.heightDiv = "0px";
  }

  ngOnInit() {
	this.heightDiv = window.innerHeight + "px";

  	// reset login status
    this.loginService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSignIn () {
    this.authService.login();
  	//let result = this.af.auth.login({ email: this.login.email, password: this.login.password });
  	/*
    let email = this.login.email.trim();
  	let pass = this.login.password.trim();

    if (!email && !pass) { return; }

    this.loading = true;
    this.loginService.login(email, pass)
  		.then(token => {
  			this.router.navigate([this.returnUrl]);
  		},
      error => {
          let msg_j = error;
          let msg = "";
          if(msg_j.type == 3 && msg_j.url == null){
            msg = "Se ha encontrado un problema al conectar con el servidor";
            this.alertService.error(msg);
          }else if(msg_j.type == 2 && msg_j.url != "") {
            msg_j = JSON.parse(error._body);
            msg = msg_j.non_field_errors[0];
            this.alertService.warning(msg);
          }
          this.loading = false;
    		});

        **/

  }

  sizeWindow () {
    this.heightDiv = window.innerHeight + "px";
  }

}
