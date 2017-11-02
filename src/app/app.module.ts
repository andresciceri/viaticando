import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { apipaths } from './app.apis';
import { ProgressBarModule, DataTableModule,SharedModule, 
          InputMaskModule, RadioButtonModule, AutoCompleteModule, 
            ListboxModule, TabViewModule, CalendarModule, ChartModule,
              DialogModule, DataListModule, TriStateCheckboxModule, DropdownModule} from 'primeng/primeng';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './api-local/api-simulate.service';

import { FileUploadModule } from 'ng2-file-upload';
import { AlertService } from './alert/alert.service';
import { AuthGuard } from './login/auth.guard';
import { LoginService } from './login/login.service';
import { TravelService } from './travel-create/travel.service';
import { TravelListService } from './travel-list/travel-list.service';
import { EmployeeListService } from './employee-list/employee-list.service';
import { TravelDetailService } from './travel-detail/travel-detail.service';
import { CategoryCreateService } from './category-create/category-create.service';
import { CategoryListService } from './category-list/category-list.service';
import { StatusCreateService } from './status-create/status-create.service';
import { StatusListService } from './status-list/status-list.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterLayerComponent } from './router-layer/router-layer.component';
import { AlertComponent } from './alert/alert.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { StatusCreateComponent } from './status-create/status-create.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ApproveexpPipe } from './approveexp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RouterLayerComponent,
    AlertComponent,
    MenuMainComponent,
    TravelCreateComponent,
    TravelListComponent,
    EmployeeListComponent,
    TravelDetailComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    StatusCreateComponent,
    StatusListComponent,
    ApproveexpPipe    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    ProgressBarModule,
    DataTableModule,
    SharedModule,
    InputMaskModule,
    RadioButtonModule,
    FileUploadModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ListboxModule,
    TabViewModule,
    CalendarModule,
    ChartModule,
    DialogModule,
    DataListModule,
    TriStateCheckboxModule,
    DropdownModule
    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
  AuthGuard,
  LoginService,
  AlertService,
  TravelService,
  TravelListService,
  EmployeeListService,
  TravelDetailService,
  CategoryCreateService,
  CategoryListService,
  StatusCreateService,
  StatusListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
