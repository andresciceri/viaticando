import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouterLayerComponent } from './router-layer/router-layer.component';
import { MainComponent } from './main/main.component';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { StatusCreateComponent } from './status-create/status-create.component';
import { StatusListComponent } from './status-list/status-list.component';


import { AuthGuard } from './login/auth.guard';

const appRoutes: Routes = [
	{
		path: '',
    	component: RouterLayerComponent,
    	canActivate: [],
    	children: [
    		{
	      		path: '',
	      		component: MainComponent,
	      		canActivate: []
    		},
    		{
		      path: 'main',
		      component: MainComponent,
		      canActivate: []
		    },
            {
              path: 'travel-create',
              component: TravelCreateComponent,
              canActivate: []
            },
            {
              path: 'travel-list',
              component: TravelListComponent,
              canActivate: []
            },
            {
              path: 'travel-detail/:id',
              component: TravelDetailComponent,
              canActivate: []
            },
            {
              path: 'employee-list',
              component: EmployeeListComponent,
              canActivate: []
            },
            {
              path: 'category-create',
              component: CategoryCreateComponent,
              canActivate: []
            },
            {
              path: 'category-list',
              component: CategoryListComponent,
              canActivate: []
            },
            {
              path: 'status-create',
              component: StatusCreateComponent,
              canActivate: []
            },
            {
              path: 'status-list',
              component: StatusListComponent,
              canActivate: []
            }
    	]
    },
	{
    	path: 'login',
    	component: LoginComponent
  	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);