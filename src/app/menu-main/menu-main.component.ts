import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { User } from '../login/user';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

	profile: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private authService: AuthService) { }

  ngOnInit() {

  	if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      console.log(this.profile);    
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }

}
