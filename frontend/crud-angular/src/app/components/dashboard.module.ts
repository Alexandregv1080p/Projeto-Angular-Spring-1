import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { AboutComponent } from '../components/about/about.component';
import { ClientsComponent } from '../components/clients/clients.component';
import { DelClientComponent } from '../components/clients/del-client/del-client.component';
import { RegClientComponent } from '../components/clients/reg-client/reg-client.component';
import { UpdClientComponent } from '../components/clients/upd-client/upd-client.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { CanvadonutchartComponent } from '../widgets/canvadonutchart/canvadonutchart.component';
import { ChartPieComponent } from '../widgets/chart-pie/chart-pie.component';
import { ChartsComponent } from '../widgets/charts/charts.component';
import { GraphComponent } from '../widgets/graph/graph.component';
import { TableComponent } from '../widgets/table-client/table.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TasksComponent } from './tasks/tasks.component';
import { TableTaskComponent } from '../widgets/table-task/table-task.component';
import { RegTaskComponent } from './tasks/reg-task/reg-task.component';
import { DelTaskComponent } from './tasks/del-task/del-task.component';
import { UpdTaskComponent } from './tasks/upd-task/upd-task.component';
import { ChartPie2Component } from '../widgets/chart-pie2/chart-pie2.component';
import {MatMenuModule} from '@angular/material/menu';
import { ChangePasswordComponent } from './perfil/change-password/change-password.component';



@NgModule({
  declarations: [
    HomeComponent,
    ChartsComponent,
    ClientsComponent,
    GraphComponent,
    CanvadonutchartComponent,
    ContactComponent,
    RegClientComponent,
    AboutComponent,
    TableComponent,
    DelClientComponent,
    UpdClientComponent,
    ChartPieComponent,
    DashboardComponent,
    PerfilComponent,
    TasksComponent,
    TableTaskComponent,
    RegTaskComponent,
    DelTaskComponent,
    UpdTaskComponent,
    ChartPie2Component,
    ChangePasswordComponent
  ],
  imports: [
    
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    NgxChartsModule,
    MatGridListModule,
    CanvasJSAngularChartsModule,
    HighchartsChartModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
