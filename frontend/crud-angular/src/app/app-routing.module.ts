import { DelClientComponent } from './components/clients/del-client/del-client.component';
import { RegClientComponent } from './components/clients/reg-client/reg-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { UpdClientComponent } from './components/clients/upd-client/upd-client.component';
import { HomeComponent } from './components/home/home.component';

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
    path:"clientes/update-client/:id",
    component: UpdClientComponent
  },{
    path:"clientes/delete-client/:id",
    component: DelClientComponent
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
