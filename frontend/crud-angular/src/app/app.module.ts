import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/template/header/header.component'
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatGridListModule} from '@angular/material/grid-list'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsComponent } from './widgets/charts/charts.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GraphComponent } from './widgets/graph/graph.component';
import { CanvadonutchartComponent } from './widgets/canvadonutchart/canvadonutchart.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import { RegClientComponent } from './components/clients/reg-client/reg-client.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './widgets/table/table.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DelClientComponent } from './components/clients/del-client/del-client.component';
import { UpdClientComponent } from './components/clients/upd-client/upd-client.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChartPieComponent } from './widgets/chart-pie/chart-pie.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    LoginScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
