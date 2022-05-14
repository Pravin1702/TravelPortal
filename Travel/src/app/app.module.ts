import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { HrComponent } from './hr/hr.component';
import { ManagerComponent } from './manager/manager.component';
import { FacilityComponent } from './facility/facility.component';
import { DepartmentheadComponent } from './departmenthead/departmenthead.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { UserService } from './service/user.service';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { RequestService } from './service/request.service';
import { ProfileComponent } from './profile/profile.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ViewsComponent } from './views/views.component';
import { ApprovelComponent } from './approvel/approvel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    HrComponent,
    ManagerComponent,
    FacilityComponent,
    DepartmentheadComponent,
    HomeComponent,
    RequestComponent,
    ProfileComponent,
    ViewrequestComponent,
    ViewsComponent,
    ApprovelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [UserService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
