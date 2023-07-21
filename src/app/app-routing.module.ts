import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './dashboard/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"user",
    pathMatch:"full"
  },
  {
    path:"user",
    loadChildren:() =>
    import("./user/user.module").then(m=> m.UserModule)
 },
 {
  path:"dashboard",
  loadChildren:() =>
  import("./dashboard/dashboard.module").then(m=> m.DashboardModule)
},
{
  path:"**",
  component:PagenotfoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
