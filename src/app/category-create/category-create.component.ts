import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { CategoryCreateService } from './category-create.service';

import {Category} from './category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

	private category : Category;
  
  constructor(private alertService: AlertService, private categoryService: CategoryCreateService) { 
  	this.category = new Category();
  }

  ngOnInit() {
  }

  private onCreateCategory(): void {
        
    this.categoryService.postCategory(this.category)
    .then(category => {      
      let msg = "La categoría se creó exitosamente.";
      let link = {path: '/category-list'};
      this.alertService.success(msg, link);
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
