import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"employee_master",
    component:EmployeeMasterComponent
  },
  {
    path:"create_employee",
    component:CreateEmployeeComponent
  },
  {
    path:"dashboard",
    component:HomeComponent
  },
  {
    path:"employee_nav",
    component:EmployeeNavComponent
  },
  {
    path:"contact_info",
    component:ContactInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
