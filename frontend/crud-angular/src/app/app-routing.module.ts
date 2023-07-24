import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path:"clientes",
    component:ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
