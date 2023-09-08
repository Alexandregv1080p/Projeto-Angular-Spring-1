import { UpdTaskComponent } from './tasks/upd-task/upd-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { DelClientComponent } from './clients/del-client/del-client.component';
import { RegClientComponent } from './clients/reg-client/reg-client.component';
import { UpdClientComponent } from './clients/upd-client/upd-client.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationGuard } from '../authentication.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { RegTaskComponent } from './tasks/reg-task/reg-task.component';
import { DelTaskComponent } from './tasks/del-task/del-task.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'clientes', component: ClientsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'clientes/register', component: RegClientComponent },
      { path: 'clientes/update-client/:id', component: UpdClientComponent },
      { path: 'clientes/delete-client/:id', component: DelClientComponent },
      { path: 'about', component: AboutComponent },
      { path:'perfil', component:PerfilComponent},
      { path:'tasks', component: TasksComponent},
      { path:'tasks/register', component:RegTaskComponent},
      { path:'tasks/update-task/:id', component:UpdTaskComponent},
      { path:'tasks/delete-task/:id', component:DelTaskComponent}
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
