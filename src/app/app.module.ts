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
              DialogModule, DataListModule} from 'primeng/primeng';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertService } from './alert/alert.service';
import { AuthGuard } from './login/auth.guard';
import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterLayerComponent } from './router-layer/router-layer.component';
import { AlertComponent } from './alert/alert.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

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
    EmployeeListComponent
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
    DataListModule
  ],
  providers: [
  AuthGuard,
  LoginService,
  AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
