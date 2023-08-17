import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authenticate/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    loadChildren:() => import('./components/dashboard.module').then((m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
