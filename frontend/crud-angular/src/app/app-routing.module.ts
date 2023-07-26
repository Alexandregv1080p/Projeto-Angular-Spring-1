import { RegClientComponent } from './components/clients/reg-client/reg-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path:"clientes",
    component:ClientsComponent
  },{
    path:"contact",
    component:ContactComponent
  },{
    path:"clientes/register",
    component:RegClientComponent
  },{
    path:"about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
