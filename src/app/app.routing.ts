import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouterLayerComponent } from './router-layer/router-layer.component';
import { MainComponent } from './main/main.component';

import { AuthGuard } from './login/auth.guard';

const appRoutes: Routes = [
	{
		path: '',
    	component: RouterLayerComponent,
    	canActivate: [AuthGuard],
    	children: [
    		{
	      		path: '',
	      		component: MainComponent,
	      		canActivate: [AuthGuard]
    		},
    		{
		      path: 'main',
		      component: MainComponent,
		      canActivate: [AuthGuard]
		    }
    	]
    },
	{
    	path: 'login',
    	component: LoginComponent
  	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);