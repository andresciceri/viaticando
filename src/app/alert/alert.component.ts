import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

	message: any;
	isVisible : string;
  title: string;
  
  constructor(private alertService: AlertService, private route: ActivatedRoute, 
    private router: Router) { 
  	this.isVisible = "none";
  }

  ngOnInit() {
        this.alertService.getMessage().subscribe(message => { 
        	this.message = message; 
        	if(this.message) {
        		this.isVisible = "block";
            if(this.message.type == "error"){
              this.title = "Alerta";
            }else if(this.message.type == "success"){
              this.title = "Mensaje";
            }else if(this.message.type == "warning"){
              this.title = "Mensaje";
            }
        	}
        });
    }

  goDetail () {
    if(this.message.link.param) {
      this.router.navigate([this.message.link.path, this.message.link.param]);  
    }else {
      this.router.navigate([this.message.link.path]);
    }
    
  }

  closeModal() {
    this.message = "";
    this.isVisible = "none";
  }

}
