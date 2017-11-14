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
import { TravelEditComponent } from './travel-edit/travel-edit.component';
import { StatusEditComponent } from './status-edit/status-edit.component';
import { CallbackComponent } from './callback/callback.component';

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
		    },
        {
          path: 'travel-create',
          component: TravelCreateComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'travel-edit/:id',
          component: TravelEditComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'travel-list',
          component: TravelListComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'travel-detail/:id',
          component: TravelDetailComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'employee-list',
          component: EmployeeListComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'category-create',
          component: CategoryCreateComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'category-list',
          component: CategoryListComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'status-create',
          component: StatusCreateComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'status-edit/:id',
          component: StatusEditComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'status-list',
          component: StatusListComponent,
          canActivate: [AuthGuard]
        }
    	]
    },
    {
      path:'callback',
      component: CallbackComponent     
    },
	  {
    	path: 'login',
    	component: LoginComponent
  	},
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);