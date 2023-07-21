import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PagenotfoundComponent,
    EmployeeMasterComponent,
    CreateEmployeeComponent,
    HomeComponent,
    EmployeeNavComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
