import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryListService } from './category-list.service';
import { AlertService } from '../alert/alert.service';
import { Category } from '../category-create/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

	private categories : Category[];

  constructor(private categoryListService: CategoryListService, private alertService: AlertService,
  	private route: ActivatedRoute, private router: Router) { 
  	this.categories = [];
  }

  ngOnInit() {
  	this.categoryListService.getCategoryList()
      .then(categories => {
          this.categories = categories;
      },
      error => {
          let msg_j = error;
          let msg = "";
          if(msg_j.type == 3 && msg_j.url == null){
            msg = "Se ha encontrado un problema al conectar con el servidor";
            this.alertService.error(msg);
          }else if(msg_j.type == 2 && msg_j.url != "") {
            msg = "Se ha encontrado un problema al conectar con el servidor";
            this.alertService.warning(msg);
          }
        });
  }

}
