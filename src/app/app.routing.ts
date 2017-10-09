import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouterLayerComponent } from './router-layer/router-layer.component';
import { MainComponent } from './main/main.component';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


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
              path: 'employee-list',
              component: EmployeeListComponent,
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