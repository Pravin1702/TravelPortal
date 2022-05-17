import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovelComponent } from './approvel/approvel.component';
import { DepartmentheadComponent } from './departmenthead/departmenthead.component';
import { EmployeeComponent } from './employee/employee.component';
import { FacilityComponent } from './facility/facility.component';
import { HomeComponent } from './home/home.component';
import { HrComponent } from './hr/hr.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'viewcart',component:ViewrequestComponent},
  {path:'view',component:ViewsComponent},
  {path:'register',component:RegisterComponent},
  {path:'status',component:ApprovelComponent},
  {path:'ticketprovider',component:TicketbookingComponent},
  {path:'request',component:RequestComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'hr',component:HrComponent},
  {path:'head',component:DepartmentheadComponent},
  {path:'manager',component:ManagerComponent},
  {path:'Home',component:HomeComponent},
  {path:'facility',component:FacilityComponent},
  {path:'',component:MenuComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
