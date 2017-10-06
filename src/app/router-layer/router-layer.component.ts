import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';

@Component({
  selector: 'app-router-layer',
  templateUrl: './router-layer.component.html',
  styleUrls: ['./router-layer.component.css']
})
export class RouterLayerComponent implements OnInit {

	returnUrl: string;
	heightDiv: string;
	status: string;
	statusIcon: boolean;
	user: User;
	value: number = 0;
	statusBar: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {
  	//window.addEventListener('online',  this.updateIndicator.bind(this));
  	//window.addEventListener('offline', this.updateIndicator.bind(this));
  	this.user = new User();
  	this.statusBar = true;
    window.addEventListener("resize", this.sizeWindow);
    this.heightDiv = "0px";
   }

  ngOnInit() {
  	let interval = setInterval(() => {
        this.value = this.value + Math.floor(Math.random() * 10) + 1;
        if(this.value > 100) {
            this.value = 100;
            clearInterval(interval);
            this.statusBar = false;
        }
    }, 300);

    this.heightDiv = (window.innerHeight - 50) + "px";
    //this.profileUser();

  	if(navigator.onLine){
  		this.status = "Online";
  		this.statusIcon = true;
      	//this.functions.changeFavicon("active");
  	}else {
  		this.status = "Offline";
  		this.statusIcon = false;
      	//this.functions.changeFavicon("error");
  	}
  }

  logOut() {
  	this.loginService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'login';
    this.router.navigate([this.returnUrl]);
  }

  sizeWindow () {
    this.heightDiv = (window.innerHeight - 50) + "px";
  }

}
