import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import {LoginService} from '../login/login.service';
import { User } from '../login/user';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

	profile: any;
  private isAdmin: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
    private authService: AuthService, private loginService: LoginService) { }

  ngOnInit() {

  	if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      let auth = this.profile.sub.split("auth0|");
      this.loginService.profile(auth[1])
      .then(prof => {
        this.isAdmin = prof.isAdmin;
      });
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;        
        let auth = this.profile.sub.split("auth0|");
        this.loginService.profile(auth[1])
        .then(prof => {
          this.isAdmin = prof.isAdmin;
        });
      });
    }
  }

}
